import yf from "../yahoo.js"
import { delay } from "../../utils/delay.js"
import { formatDateToYMD, formatDateToDMYShortYear } from "../utils/dates.js"
import AppError from "../../AppError.js"
import { insertDocument } from "./db.js"

function truncateToTwoDecimals(value) {
	return Math.trunc(value * 100) / 100
}

export async function fetchSingleAssetData(symbol, query) {
	const { period1, period2 } = query

	if (!symbol) {
		throw new AppError(400, "Missing required parameter: symbol")
	}

	if (!period1 || !period2) {
		throw new AppError(400, "Missing required parameters: period1 and period2")
	}

	await delay()

	const history = await yf.historical(symbol.toUpperCase(), {
		period1,
		period2,
	})

	if (!history || history.length === 0) {
		throw new AppError(404, `No historical data found for symbol "${symbol}"`)
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

export async function setSingleAssetData(symbol, name, year) {
	const period1 = `${year}-01-01`
	const period2 = `${year + 1}-01-01`
	const data = await fetchSingleAssetData(symbol, { period1, period2 })

	const doc = { symbol: data.symbol, name, year, count: data.count, data: data.data }
	await insertDocument(doc)
}
