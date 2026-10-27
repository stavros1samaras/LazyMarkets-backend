import AppError from "../../AppError.js"

export const validateYear = (req, res, next) => {
	const year = parseInt(req.params.year, 10)

	if (Number.isNaN(year)) {
		throw new AppError(400, "Invalid year parameter")
	}

	req.middlewareData.year = year
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
