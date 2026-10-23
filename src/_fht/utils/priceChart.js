import yf from "../yahoo.js"
import { delay } from "../../utils/delay.js"
import { formatDateToYMD, formatDateToDMYShortYear } from "./dates.js"

function truncateToTwoDecimals(value) {
	return Math.trunc(value * 100) / 100
}

export async function priceChart(symbol, query) {
	const { period1, period2 } = query

	if (!symbol) {
		throw new Error("Symbol is required")
	}

	if (!period1 || !period2) {
		throw new Error("period1 and period2 are required")
	}

	await delay()

	const history = await yf.historical(symbol.toUpperCase(), {
		period1,
		period2,
	})

	if (!history || history.length === 0) {
		throw new Error("No historical data returned from Yahoo Finance")
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
