import * as cheerio from "cheerio";
import axios from "axios";

class AnalyzeImg {
  async index(req, res) {
    try {
      const url = req.body.url;
      const { data } = await axios(url);
      const $ = cheerio.load(data);

      const Images = [];
      $("img").each((index, element) => {
        const src = $(element).attr("src");
        Images.push(src);
      });

      const imagesWithSize = await Promise.all(
        Images.map(async (imageUrl) => {
          try {
            const response = await axios.get(imageUrl, {
              responseType: "arraybuffer",
            });
            const sizeInBytes = Buffer.byteLength(response.data);
            const sizeInKilobytes = sizeInBytes / 1024;
            return { url: imageUrl, size: sizeInKilobytes.toFixed(2) };
          } catch (error) {
            console.error(`Ошибка при загрузке изображения: ${error.message}`);
            return { url: imageUrl, size: "Ошибка загрузки" };
          }
        })
      );

      const analysisResult = { images: imagesWithSize };
      res.json(analysisResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AnalyzeImg();
