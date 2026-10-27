import { db } from "../../db.js"
import AppError from "../../AppError.js"

const FHT_NEXT_COLLECTION = process.env.FHT_NEXT_COLLECTION_NAME

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
