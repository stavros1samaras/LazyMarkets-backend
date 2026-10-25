import express from "express"
import { insertIndicators } from "./db.js"
import { allCountries } from "../config.js"
import { validateCountry } from "../middleware.js"
import { validateStartYear, validateYearRange } from "./middleware.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

router.get(
	"/set-country-data/:country/:startYear",
	validateCountry,
	validateStartYear,
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { country, startYear, endYear } = req.middlewareData
		const results = await insertIndicators(country, startYear, endYear)

		res.status(200).json({
			country,
			startYear,
			endYear,
			results,
		})
	})
)

router.get(
	"/set-countries-data/:startYear",
	validateStartYear,
	validateYearRange,
	asyncHandler(async (req, res) => {
		const { startYear, endYear } = req.middlewareData
		const results = []

		for (const country of allCountries) {
			const countryResult = await insertIndicators(country, startYear, endYear)
			results.push({ country, data: countryResult })
		}
		res.status(200).json({
			allCountries,
			startYear,
			endYear,
			results,
		})
	})
)

export default router
