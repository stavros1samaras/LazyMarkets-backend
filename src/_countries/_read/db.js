import { db } from "../../db.js"
import AppError from "../../AppError.js"

const POP_COLLECTION = process.env.WORLD_BANK_COLLECTION_NAME

export default async function getCountryData(country) {
	const doc = await db.collection(POP_COLLECTION).findOne({ country })

	if (!doc) {
		throw new AppError(404, `Country data not found for "${country}"`)
	}

	return doc
}
