import express from "express"
import { setAssetDataRange } from "./db.js"
import { validateTicker } from "../middleware.js"
import { validateName, validateYearRange } from "./middleware.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

router.get(
	"/insert-ticker-prices/:symbol/:name",
	validateTicker,
	validateName,
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { symbol, name, startYear, endYear } = req.middlewareData
		const results = await setAssetDataRange(symbol, name, startYear, endYear)
		res.status(200).json({
			symbol,
			name,
			period: `${startYear}-${endYear}`,
			results,
		})
	})
)

export default router
