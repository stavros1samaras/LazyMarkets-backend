import { delay } from "../../utils/delay.js"
import { getSingleAssetData } from "./read.js"
import { setSingleAssetData } from "./write.js"

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
