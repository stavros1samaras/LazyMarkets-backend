import express from "express"
import { getSingleAssetData } from "./db.js"
import { validateTicker } from "../middleware.js"
import { validateYear } from "./middleware.js"
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

export default router
