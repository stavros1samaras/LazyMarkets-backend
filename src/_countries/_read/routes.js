import express from "express"
import { validateCountry } from "../middleware.js"
import getCountryData from "./db.js"
import asyncHandler from "../../utils/asyncHandler.js"

const router = express.Router()

router.get(
	"/get-country-data/:country",
	validateCountry,
	asyncHandler(async (req, res) => {
		const { country } = req.middlewareData
		const doc = await getCountryData(country)
		res.status(200).json(doc)
	})
)

export default router
