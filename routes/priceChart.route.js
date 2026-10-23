import express from "express"
import { getPriceChart } from "../services/priceChart.service.js"

const router = express.Router()

/**
 * GET http://localhost:3001/api/priceChart/AAPL?period1=2023-01-01&period2=2024-01-01
 */
router.get("/:symbol", async (req, res) => {
	const result = await getPriceChart(req.params.symbol, req.query)

	const status = result.status
	const body = result.body

	res.status(status)
	res.json(body)
})

export default router
