import express from "express"
import { setAssetDataRange } from "../DB_utils/r-w.js"
import { validateTicker } from "../middleware.js"
import { validateName, validateYearRange } from "./middleware.js"

const router = express.Router()

router.get(
	"/insert-ticker-prices/:symbol/:name",
	validateTicker,
	validateName,
	validateYearRange,
	async (req, res) => {
		const { symbol, name, startYear, endYear } = req.middlewareData
		try {
			const results = await setAssetDataRange(symbol, name, startYear, endYear)
			res.status(200).json({
				symbol,
				name,
				period: `${startYear}-${endYear}`,
				results,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
)

export default router
