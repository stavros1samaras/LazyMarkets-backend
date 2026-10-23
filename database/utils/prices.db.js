import { db } from "../../db.js"
import { priceChart } from "../../utils/priceChart.js"
import { randomDelay10to30s } from "../../utils/common.js"

const FHT_COLLECTION = process.env.FHT_COLLECTION_NAME

export async function findPrices(symbol, year) {
	return db.collection(FHT_COLLECTION).find({ symbol, year }).toArray()
}

export async function insertPrices(symbol, name, startYear = 2018, endYear = 2026) {
	const results = []
	for (let year = startYear; year <= endYear; year++) {
		const exists = await db.collection(FHT_COLLECTION).findOne({ symbol, year })
		if (exists) {
			results.push({ year, status: "skipped" })
			continue
		}
		await randomDelay10to30s()
		const period1 = `${year}-01-01`
		const period2 = `${year + 1}-01-01`
		const data = await priceChart(symbol, { period1, period2 })
		const doc = { symbol: data.symbol, name, year, count: data.count, data: data.data }
		await db.collection(FHT_COLLECTION).insertOne(doc)
		results.push({ year, status: "inserted" })
	}
	return results
}
