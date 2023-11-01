import AnalyzeLink from "/Users/danilreznicenko/seo-analysis/contorollers/link.controllers.js";
import AnalyzeMeta from "/Users/danilreznicenko/seo-analysis/contorollers/meta.controllers.js";
import AnalyzeTime from "/Users/danilreznicenko/seo-analysis/contorollers/time.controllers.js";
import AnalyzeRobots from "/Users/danilreznicenko/seo-analysis/contorollers/robots.controllers.js"

import express from "express"
const router = express.Router();

router.post("/analyze-meta", AnalyzeMeta.index)
router.post("/analyze-links", AnalyzeLink.index)
router.post("/analyze-time", AnalyzeTime.index)
router.post("/analyze-robots", AnalyzeRobots.index)


export default router;