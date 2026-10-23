import { db } from "../../db.js"
import { indicators } from "../config.js"

const POP_COLLECTION = process.env.WORLD_BANK_COLLECTION_NAME

export async function insertIndicators(country, startYear, endYear = 2026) {
	const doc = { country }

	for (const item of indicators) {
		const { indicator, key } = item
		const dataArray = await fetchIndicatorData(country, startYear, endYear, indicator)
		if (dataArray) {
			doc[key] = dataArray
		}
		// await new Promise((resolve) => setTimeout(resolve, 1000));
	}

	if (Object.keys(doc).length === 1) {
		return { status: "no-data", message: "No data found" }
	}

	const result = await db.collection(POP_COLLECTION).replaceOne({ country }, doc, { upsert: true })

	return {
		status: "success",
		upsertedCount: result.upsertedCount || 0,
		modifiedCount: result.modifiedCount,
	}
}

async function fetchIndicatorData(country, startYear, endYear, indicator) {
	const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&date=${startYear}:${endYear}`
	const response = await fetch(url)
	if (!response.ok) throw new Error(`World Bank API request failed for ${indicator}`)

	const data = await response.json()
	const records = data[1] || []
	const arr = []

	for (const r of records) {
		if (r.value !== null && r.value !== undefined) {
			arr.push({ year: parseInt(r.date), value: r.value })
		}
	}

	return arr.length ? arr : null
}
