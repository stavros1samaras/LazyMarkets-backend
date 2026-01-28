import express from "express";
import { fillTickerPrices } from "../services/insertPrices.service.js";

const router = express.Router();

router.get("/:symbol/:name", async (req, res) => {
    const symbol = req.params.symbol?.toUpperCase();
    const name = req.params.name;
    if (!symbol || !name) return res.status(400).json({ error: "Symbol and name route params are required" });

    const startYear = req.query.startYear ? parseInt(req.query.startYear) : undefined;
    const endYear = req.query.endYear ? parseInt(req.query.endYear) : undefined;

    const result = await fillTickerPrices(symbol, name, startYear, endYear);
    res.status(result.status).json(result.body);
});

export default router;
