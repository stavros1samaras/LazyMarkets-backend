import AppError from "../../AppError.js"

export const validateName = (req, res, next) => {
	const name = req.params.name

	if (!name) {
		throw new AppError(400, "Invalid or missing name parameter")
	}

	req.middlewareData.name = name
	next()
}

export const validateYearRange = (req, res, next) => {
	const startYear = req.query.startYear ? parseInt(req.query.startYear, 10) : 2018
	const endYear = req.query.endYear ? parseInt(req.query.endYear, 10) : 2026

	if (startYear > endYear) {
		throw new AppError(400, "startYear cannot be greater than endYear")
	}

	req.middlewareData.startYear = startYear
	req.middlewareData.endYear = endYear
	next()
}

/**
 * Validate year parameter and ensure it's <= 2025
 */
export const validateYearMax2025 = (req, res, next) => {
	const year = parseInt(req.params.year, 10)

	if (Number.isNaN(year)) {
		throw new AppError(400, "Invalid year parameter")
	}

	if (year > 2025) {
		throw new AppError(400, "Year must be less than or equal to 2025")
	}

	req.middlewareData.year = year
	next()
}
