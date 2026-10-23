import express from "express"
import { findPrices } from "../utils/prices.db.js"
import { insertPrices } from "../utils/prices.db.js"

const router = express.Router()

router.get("/get-ticker-one-year/:symbol/:year", async (req, res) => {
	// URL: /api/db/prices/get-ticker-one-year/:symbol/:year
	try {
		const symbol = req.params.symbol?.toUpperCase()
		const year = parseInt(req.params.year)
		if (!symbol || Number.isNaN(year))
			return res.status(400).json({ error: "Invalid symbol or year" })
		const data = await findPrices(symbol, year)
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

router.get("/insert-ticker-prices/:symbol/:name", async (req, res) => {
	// URL: /api/db/prices/insert-ticker-prices/:symbol/:name
	try {
		const symbol = req.params.symbol?.toUpperCase()
		const name = req.params.name
		if (!symbol || !name)
			return res.status(400).json({ error: "Symbol and name route params are required" })

		const startYear = req.query.startYear ? parseInt(req.query.startYear) : 2018
		const endYear = req.query.endYear ? parseInt(req.query.endYear) : 2026

		const results = await insertPrices(symbol, name, startYear, endYear)
		res.status(200).json({ symbol, name, results })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

export default router
