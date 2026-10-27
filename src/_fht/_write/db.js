import { delay } from "../../utils/delay.js"
import { getSingleAssetData } from "../_read/db.js"
import { setSingleAssetData } from "./yahoo-finance.js"
import { db } from "../../db.js"
import AppError from "../../AppError.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME
const FHT_NEXT_COLLECTION = process.env.FHT_NEXT_COLLECTION_NAME

export async function insertDocument(doc) {
	try {
		await db.collection(FHT_COLLECTION).insertOne(doc)
	} catch (error) {
		throw new AppError(
			500,
			`Failed to insert data for "${doc.symbol}" year ${doc.year}: ${error.message}`
		)
	}
}

/**
 * Insert document into FHT_NEXT collection
 * @param {Object} doc - The document to insert
 */
export async function insertNextDocument(doc) {
	try {
		console.log(new Date().toLocaleTimeString())
		await db.collection(FHT_NEXT_COLLECTION).insertOne(doc)
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
