import { db } from "../../db.js"
import { fetchSingleAssetData } from "./yahoo-finance.js"
import { delay } from "../../utils/delay.js"
import { getSingleAssetData } from "../../_read/db.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

export async function setSingleAssetData(symbol, name, year) {
	const period1 = `${year}-01-01`
	const period2 = `${year + 1}-01-01`
	const data = await fetchSingleAssetData(symbol, { period1, period2 })

	const doc = { symbol: data.symbol, name, year, count: data.count, data: data.data }
	await db.collection(FHT_COLLECTION).insertOne(doc)
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
