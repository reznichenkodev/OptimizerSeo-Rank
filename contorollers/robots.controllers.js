import * as cheerio from "cheerio";
import checkIndexing from "../utils/analyzeRobots.js";
import axios from "axios";

class AnalyzeRobots {
  async index(req, res) {
    try {
      const url = req.body.url;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const baseUrl = new URL(url);

      const links = [];
      $("a").each((index, element) => {
        const href = $(element).attr("href");
        const absoluteUrl = new URL(href, baseUrl).toString();
        links.push(absoluteUrl);
      });

      const validLinks = await checkIndexing(links);

      const analysisResult = { robots: validLinks };

      res.json(analysisResult);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AnalyzeRobots();
