import { db } from "../../db.js"

const POP_COLLECTION = process.env.WORLD_BANK_COLLECTION_NAME

export default async function getCountryData(country) {
	const doc = await db.collection(POP_COLLECTION).findOne({ country })

	if (!doc) {
		throw new Error("not-found")
	}

	return doc
}
