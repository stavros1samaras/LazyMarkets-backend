import express from "express"
import { insertIndicators } from "./utils/country.js"
import { db } from "../db.js"
import { allCountries } from "./config.js"

const router = express.Router()

const POP_COLLECTION = process.env.WORLD_BANK_COLLECTION_NAME

// http://localhost:3001/api/db/country/get-country-data/GR

router.get("/get-country-data/:country", async (req, res) => {
	try {
		const country = req.params.country?.toUpperCase()

		if (!country) {
			return res.status(400).json({
				error: "Country route param is required",
			})
		}

		const doc = await db.collection(POP_COLLECTION).findOne({ country })

		if (!doc) {
			return res.status(404).json({
				status: "not-found",
				message: "No data found for this country",
			})
		}

		res.status(200).json(doc)
	} catch (error) {
		res.status(500).json({
			error: error.message,
		})
	}
})

// http://localhost:3001/api/db/country/set-population/GR/2005

router.get("/set-country-data/:country/:startYear", async (req, res) => {
	try {
		const country = req.params.country?.toUpperCase()
		const startYear = parseInt(req.params.startYear)
		const endYear = 2026

		if (!country || isNaN(startYear)) {
			return res.status(400).json({ error: "Country and year route param is required" })
		}

		const results = await insertIndicators(country, startYear, endYear)

		res.status(200).json({
			country,
			startYear,
			endYear,
			results,
		})
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

router.get("/set-countries-data/:startYear", async (req, res) => {
	try {
		const startYear = parseInt(req.params.startYear)
		const endYear = 2026

		if (isNaN(startYear)) {
			return res.status(400).json({ error: "Year route param is required" })
		}

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
		res.status(500).json({ error: error.message })
	}
})

export default router
