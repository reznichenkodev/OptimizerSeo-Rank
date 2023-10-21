import axios from "axios";
import * as cheerio from "cheerio";

class AnalyzeMeta {
  async index(req, res) {
    try {
      const url = req.body.url;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const metaTags = [];
      $("meta").each((index, element) => {
        const name = $(element).attr("name");
        const content = $(element).attr("content");
        metaTags.push({ name, content });
      });

      const analysisResult = {
        metaTags,
        characterCount: data.length,
      };

      // console.log(analysisResult);
      res.json(analysisResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AnalyzeMeta();
