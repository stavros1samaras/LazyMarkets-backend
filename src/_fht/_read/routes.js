import express from "express"
import { getSingleAssetData } from "../DB_utils/read.js"
import { validateTicker } from "../middleware.js"
import { validateYear } from "./middleware.js"

const router = express.Router()

router.get(
	"/get-ticker-one-year/:symbol/:year",
	validateTicker,
	validateYear,
	async (req, res) => {
		const { symbol, year } = req.middlewareData
		try {
			const data = await getSingleAssetData(symbol, year)
			res.status(200).json(data)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
)

export default router
