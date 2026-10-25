import express from "express"
import { validateCountry } from "../middleware.js"
import getCountryData from "./db.js"

const router = express.Router()

router.get("/get-country-data/:country", validateCountry, async (req, res) => {
	const { country } = req.middlewareData

	try {
		const doc = await getCountryData(country)
		res.status(200).json(doc)
	} catch (error) {
		if (error.message === "not-found") {
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
})

export default router
