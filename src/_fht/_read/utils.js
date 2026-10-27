import { MARKET_ASSETS } from "../Database.js"
import { getRecordBySymbolAndYear } from "./db.js"

/**
 * Check all symbols from MARKET_ASSETS for a given year and return structured data
 * @param {number} year - The year to check
 * @returns {Promise<Object>} Object with same structure as MARKET_ASSETS plus data key
 */
export async function checkAllSymbolsByYear(year) {
	const result = {}

	for (const [category, assets] of Object.entries(MARKET_ASSETS)) {
		result[category] = []

		for (const asset of assets) {
			const record = await getRecordBySymbolAndYear(asset.dbSymbol, year)

			result[category].push({
				symbol: asset.symbol,
				lower: asset.lower,
				encoding: asset.encoding,
				dbSymbol: asset.dbSymbol,
				label: asset.label,
				data: record ? record.data : "not found",
			})
		}
	}

	return result
}

/**
 * Get symbols that have no data for a given year
 * @param {number} year - The year to check
 * @returns {Promise<Array>} Array of symbols with no data
 */
export async function getSymbolsWithoutData(year) {
	const allData = await checkAllSymbolsByYear(year)
	const missingSymbols = []

	for (const [category, assets] of Object.entries(allData)) {
		for (const asset of assets) {
			if (asset.data === "not found") {
				missingSymbols.push({
					symbol: asset.symbol,
					dbSymbol: asset.dbSymbol,
					category,
					encoding: asset.encoding,
					label: asset.label,
				})
			}
		}
	}

	return missingSymbols
}
