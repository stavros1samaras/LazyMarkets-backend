import yf from "../services/yahoo.js"
import { deleteByPath } from "./object.js"
import { delay } from "./common.js"

export async function recommendations(symbol) {
	if (!symbol) {
		throw new Error("Symbol is required")
	}

	const upperSymbol = symbol.toUpperCase()
	await delay()
	const recommendationsData = await yf.recommendationsBySymbol(upperSymbol)

	if (!recommendationsData) {
		throw new Error("No data returned from Yahoo Finance")
	}

	const excludeFields = []

	const filtered = { ...recommendationsData }
	excludeFields.forEach((path) => deleteByPath(filtered, path))

	return {
		symbol: upperSymbol,
		data: filtered,
	}
}
