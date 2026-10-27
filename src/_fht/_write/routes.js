import express from "express"
import { setAssetDataRange } from "./db.js"
import { fetchAndInsertAllMissingSymbols } from "./utils.js"
import { validateTicker } from "../middleware.js"
import { validateName, validateYearRange, validateYearMax2025 } from "./middleware.js"
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

/**
 * Fetch and insert data for all symbols missing data for a given year
 */
router.get(
	"/fetch-missing-symbols/:year",
	validateYearMax2025,
	asyncHandler(async (req, res) => {
		const { year } = req.middlewareData
		const processedSymbols = await fetchAndInsertAllMissingSymbols(year)
		res.status(200).json(processedSymbols)
	})
)

export default router
