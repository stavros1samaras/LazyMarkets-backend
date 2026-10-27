import { getSymbolsWithoutData } from "../_read/utils.js"
import { fetchSingleAssetData } from "./yahoo-finance.js"
import { delay } from "../../utils/delay.js"
import { insertNextDocument } from "./db.js"

/**
 * Fetch and insert data for a single missing symbol
 * @param {string} dbSymbol - The database symbol format
 * @param {string} label - The human-readable label for the symbol
 * @param {number} year - The year to fetch data for
 * @returns {Promise<void>}
 */
async function fetchAndInsertMissingSymbol(dbSymbol, label, year) {
	const period1 = `${year}-01-01`
	const period2 = `${year + 1}-01-01`

	// 20 second delay
	await delay(20000, 25000)

	// Fetch data from Yahoo Finance
	const data = await fetchSingleAssetData(dbSymbol, { period1, period2 })

	// Insert into FHT_NEXT database
	const doc = {
		symbol: data.symbol,
		name: label,
		year,
		count: data.count,
		data: data.data,
	}
	await insertNextDocument(doc)
}

/**
 * Get symbols without data and fetch/insert data for each one
 * @param {number} year - The year to check
 * @returns {Promise<Array>} Array of processed symbols
 */
export async function fetchAndInsertAllMissingSymbols(year) {
	const missingSymbols = await getSymbolsWithoutData(year)

	// Process each missing symbol
	for (const symbol of missingSymbols) {
		await fetchAndInsertMissingSymbol(symbol.dbSymbol, symbol.label, year)
	}

	return missingSymbols
}
