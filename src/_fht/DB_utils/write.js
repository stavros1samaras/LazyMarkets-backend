import { db } from "../../db.js"
import { fetchSingleAssetData } from "../utils/yf-fetch.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

export async function setSingleAssetData(symbol, name, year) {
	const period1 = `${year}-01-01`
	const period2 = `${year + 1}-01-01`
	const data = await fetchSingleAssetData(symbol, { period1, period2 })

	const doc = { symbol: data.symbol, name, year, count: data.count, data: data.data }
	await db.collection(FHT_COLLECTION).insertOne(doc)
}
