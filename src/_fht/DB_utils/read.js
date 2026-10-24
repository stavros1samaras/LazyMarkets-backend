import { db } from "../../db.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

export async function getSingleAssetData(symbol, year) {
	return db.collection(FHT_COLLECTION).find({ symbol, year }).toArray()
}
