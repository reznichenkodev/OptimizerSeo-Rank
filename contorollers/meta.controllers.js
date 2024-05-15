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
        console.log(element);
        const name = $(element).attr("name");
        const property = $(element).attr("property");
        const content = $(element).attr("content");
        metaTags.push({ name, property, content });
      });

      const analysisResult = {
        metaTags,
      };

      res.json(analysisResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AnalyzeMeta();
