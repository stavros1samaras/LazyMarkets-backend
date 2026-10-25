import AppError from "../../AppError.js"

export async function fetchIndicatorData(country, startYear, endYear, indicator) {
	const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&date=${startYear}:${endYear}`
	const response = await fetch(url)

	if (!response.ok)
		throw new AppError(
			404,
			`Failed to fetch indicator "${indicator}" for "${country}" (status: ${response.status})`
		)

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
