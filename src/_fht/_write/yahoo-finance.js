import yf from "../yahoo.js"
import { delay } from "../../utils/delay.js"
import { formatDateToYMD, formatDateToDMYShortYear } from "../utils/dates.js"

function truncateToTwoDecimals(value) {
	return Math.trunc(value * 100) / 100
}

/**
 * Check if historical data is unavailable for a symbol in the given year
 * @param {string} symbol - The symbol to check
 * @param {string} period1 - Start date in YYYY-MM-DD format
 * @returns {boolean} True if data is likely unavailable, false otherwise
 */
function isUnavailableData(symbol, period1) {
	const startYear = parseInt(period1.split("-")[0], 10)
	const upperSymbol = symbol.toUpperCase()

	if (upperSymbol === "BZ=F" && startYear <= 2007) {
		return true
	}

	if (upperSymbol === "EUR=X" && startYear <= 2003) {
		return true
	}

	return false
}

export async function fetchSingleAssetData(symbol, query) {
	const { period1, period2 } = query

	if (isUnavailableData(symbol, period1)) {
		return {
			symbol: symbol.toUpperCase(),
			count: 0,
			data: [],
		}
	}

	await delay()

	const history = await yf.historical(symbol.toUpperCase(), {
		period1,
		period2,
	})

	if (!history || history.length === 0) {
		return {
			symbol: symbol.toUpperCase(),
			count: 0,
			data: [],
		}
	}

	const filteredHistory = history.map((item) => {
		const ymd = formatDateToYMD(item.date)
		return {
			date: formatDateToDMYShortYear(ymd),
			close: truncateToTwoDecimals(item.close),
		}
	})

	return {
		symbol: symbol.toUpperCase(),
		count: filteredHistory.length,
		data: filteredHistory,
	}
}
