import express from "express"
import { getSingleAssetData } from "./db.js"
import { validateTicker } from "../middleware.js"
import { validateYear, validateYearRange } from "./middleware.js"
import { checkAllSymbolsByYear, getSymbolsWithoutData } from "./utils.js"
import { EVENTS } from "../Database.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

router.get(
	"/get-ticker-one-year/:symbol/:year",
	validateTicker,
	validateYear,
	asyncHandler(async (req, res) => {
		const { symbol, year } = req.middlewareData
		const data = await getSingleAssetData(symbol, year)
		res.status(200).json(data)
	})
)

/**
 * Check all symbols from MARKET_ASSETS for a given year
 */
router.get(
	"/check-all-symbols/:year",
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { year } = req.middlewareData
		const data = await checkAllSymbolsByYear(year)
		res.status(200).json(data)
	})
)

/**
 * Get symbols that have no data for a given year
 */
router.get(
	"/missing-symbols/:year",
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { year } = req.middlewareData
		const missingSymbols = await getSymbolsWithoutData(year)
		res.status(200).json(missingSymbols)
	})
)

/**
 * Get all market events
 */
router.get(
	"/get-events",
	asyncHandler(async (req, res) => {
		res.status(200).json(EVENTS)
	})
)

export default router
