import AnalyzeLink from "../contorollers/link.controllers.js";
import AnalyzeMeta from "../contorollers/meta.controllers.js";
import AnalyzeTime from "../contorollers/time.controllers.js";
import AnalyzeRobots from "../contorollers/robots.controllers.js";
import AnalyzeImage from "../contorollers/img.controllers.js";

import express from "express";
const router = express.Router();

router.post("/analyze-meta", AnalyzeMeta.index);
router.post("/analyze-links", AnalyzeLink.index);
router.post("/analyze-time", AnalyzeTime.index);
router.post("/analyze-robots", AnalyzeRobots.index);
router.post("/analyze-img", AnalyzeImage.index);

export default router;
