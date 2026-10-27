import { db } from "../../db.js"
import AppError from "../../AppError.js"

const FHT_NEXT_COLLECTION = process.env.FHT_NEXT_COLLECTION_NAME

/**
 * Check if a record exists for a given symbol and year in FHT_NEXT collection
 * @param {string} symbol - The symbol (e.g., ^GSPC, WTI, Gold)
 * @param {number} year - The year to check
 * @returns {Promise<Object|null>} The record if found, null otherwise
 */
export async function getRecordBySymbolAndYear(symbol, year) {
	try {
		const record = await db.collection(FHT_NEXT_COLLECTION).findOne({ symbol, year })
		return record
	} catch (error) {
		throw new AppError(
			500,
			`Database query failed for symbol "${symbol}" year ${year}: ${error.message}`
		)
	}
}
