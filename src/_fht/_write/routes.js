import express from "express"
import {
	fetchAndInsertAllMissingSymbols,
	fetchAndInsertForAllEventYears,
} from "./utils.js"
import { validateYearRange } from "./middleware.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

/**
 * Fetch and insert data for all symbols missing data for a given year
 */
router.post(
	"/insert-missing-symbols/:year",
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { year } = req.middlewareData
		const processedSymbols = await fetchAndInsertAllMissingSymbols(year)
		res.status(200).json(processedSymbols)
	})
)

/**
 * Fetch and insert data for all missing symbols for all event years
 */
router.post(
	"/events/insert-symbols",
	asyncHandler(async (req, res) => {
		const results = await fetchAndInsertForAllEventYears()
		res.status(200).json(results)
	})
)

export default router
