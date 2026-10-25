import { db } from "../../db.js"
import { indicators } from "../config.js"
import { fetchIndicatorData } from "./world-bank.js"
import AppError from "../../AppError.js"

const POP_COLLECTION = process.env.WORLD_BANK_COLLECTION_NAME

export async function insertIndicators(country, startYear, endYear = 2025) {
	const doc = { country }

	for (const item of indicators) {
		const { indicator, key } = item
		const dataArray = await fetchIndicatorData(country, startYear, endYear, indicator)
		if (dataArray) {
			doc[key] = dataArray
		}
	}

	if (Object.keys(doc).length === 1) {
		throw new AppError(404, `No indicator data found for country "${country}"`)
	}

	const result = await db
		.collection(POP_COLLECTION)
		.replaceOne({ country }, doc, { upsert: true })

	return {
		status: "success",
		upsertedCount: result.upsertedCount || 0,
		modifiedCount: result.modifiedCount,
	}
}
