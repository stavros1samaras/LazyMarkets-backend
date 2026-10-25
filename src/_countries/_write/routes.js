import express from "express"
import { insertIndicators } from "./db.js"
import { allCountries } from "../config.js"
import { validateCountry } from "../middleware.js"
import { validateStartYear, validateYearRange } from "./middleware.js"

const router = express.Router()

router.get(
	"/set-country-data/:country/:startYear",
	validateCountry,
	validateStartYear,
	validateYearRange,
	async (req, res) => {
		const { country, startYear, endYear } = req.middlewareData
		try {
			const results = await insertIndicators(country, startYear, endYear)

			res.status(200).json({
				country,
				startYear,
				endYear,
				results,
			})
		} catch (error) {
			if (error.message.toLowerCase().includes("no data found")) {
				res.status(404).json({
					status: "not-found",
					message: error.message,
				})
			} else {
				res.status(500).json({
					error: error.message,
				})
			}
		}
	}
)

router.get(
	"/set-countries-data/:startYear",
	validateStartYear,
	validateYearRange,
	async (req, res) => {
		const { startYear, endYear } = req.middlewareData
		try {
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
		} catch (error) {
			if (error.message.toLowerCase().includes("no data found")) {
				res.status(404).json({
					status: "not-found",
					message: "No data found for this country",
				})
			} else {
				res.status(500).json({
					error: error.message,
				})
			}
		}
	}
)

export default router
