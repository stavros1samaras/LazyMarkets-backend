import express from "express"
import { validateYearRange } from "./middleware.js"
import { checkAllSymbolsByYear, getSymbolsWithoutData } from "./utils.js"
import { EVENTS } from "../Database.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

/**
 * Check all symbols from MARKET_ASSETS for a given year
 */
router.get(
	"/get-all-symbols/:year",
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
	"/helpers/get-missing-symbols/:year",
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
	"/events/get-events",
	asyncHandler(async (req, res) => {
		res.status(200).json(EVENTS)
	})
)

export default router
