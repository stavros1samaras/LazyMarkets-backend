import express from "express"
import { getRecordsByYear } from "./db.js"
import { validateYearRange, validateEventCode } from "./middleware.js"
import { checkAllSymbolsByYear, getSymbolsWithoutData } from "./utils.js"
import {
	EVENTS,
	EVENTS_ROUTES,
	EVENTS_LABELS_WITH_CODES,
	MARKET_ASSET_CATEGORIES,
} from "../Database.js"
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
 * Get all asset categories
 */
router.get(
	"/get-asset-categories",
	asyncHandler(async (req, res) => {
		res.status(200).json(MARKET_ASSET_CATEGORIES)
	})
)

/**
 * Get the event codes
 */
router.get(
	"/events/get-event-codes",
	asyncHandler(async (req, res) => {
		res.status(200).json(EVENTS_ROUTES)
	})
)

/**
 * Get the event labels
 */
router.get(
	"/events/get-event-labels-with-codes",
	asyncHandler(async (req, res) => {
		res.status(200).json(EVENTS_LABELS_WITH_CODES)
	})
)

/**
 * Get data for an event
 */
router.get(
	"/events/get-event-data/:eventCode",
	validateEventCode,
	asyncHandler(async (req, res) => {
		const { code } = req.middlewareData
		const event = EVENTS.find((event) => event.code === code)
		const records = await getRecordsByYear(parseInt(event.year, 10))
		const data = records.map((record) => ({
			symbol: record.symbol,
			name: record.name,
			category: record.category,
			count: record.count,
			data: record.data,
		}))
		res.status(200).json({ ...event, data })
	})
)

export default router
