import { db } from "../../db.js"
import AppError from "../../AppError.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

export async function getSingleAssetData(symbol, year) {
	try {
		return await db.collection(FHT_COLLECTION).find({ symbol, year }).toArray()
	} catch (error) {
		throw new AppError(
			500,
			`Database query failed for symbol "${symbol}" year ${year}: ${error.message}`
		)
	}
}
