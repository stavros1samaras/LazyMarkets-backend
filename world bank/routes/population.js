import express from "express";
import { insertIndicators } from "../utils/insertPopulation.js";

const router = express.Router();

// http://localhost:3001/api/db/population/set-population/GR/2005

router.get("/set-population/:country/:startYear", async (req, res) => {
  try {
    const country = req.params.country?.toUpperCase();
    const startYear = parseInt(req.params.startYear);
    const endYear = 2026;

    if (!country || isNaN(startYear)) {
      return res
        .status(400)
        .json({ error: "Country and year route param is required" });
    }

    const results = await insertIndicators(country, startYear, endYear);

    res.status(200).json({
      country,
      startYear,
      endYear,
      results,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
