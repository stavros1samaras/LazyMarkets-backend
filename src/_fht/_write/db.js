import { delay } from "../../utils/delay.js"
import { getSingleAssetData } from "../_read/db.js"
import { setSingleAssetData } from "./yahoo-finance.js"
import { db } from "../../db.js"
import AppError from "../../AppError.js"

export async function insertDocument(doc) {
	const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

	try {
		await db.collection(FHT_COLLECTION).insertOne(doc)
	} catch (error) {
		throw new AppError(
			500,
			`Failed to insert data for "${doc.symbol}" year ${doc.year}: ${error.message}`
		)
	}
}

export async function setAssetDataRange(symbol, name, startYear = 2018, endYear = 2026) {
	const results = []
	for (let year = startYear; year <= endYear; year++) {
		const existingData = await getSingleAssetData(symbol, year)

		if (existingData.length > 0) {
			results.push({ year, status: "skipped" })
			continue
		}

		await delay(10000, 30000)

		await setSingleAssetData(symbol, name, year)
		results.push({ year, status: "inserted" })
	}
	return results
}
