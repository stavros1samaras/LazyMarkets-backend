import AppError from "../../AppError.js"

/**
 * Validate year parameter: must be >= 2001 and <= current year - 1
 */
export const validateYearRange = (req, res, next) => {
	const year = parseInt(req.params.year, 10)

	if (Number.isNaN(year)) {
		throw new AppError(400, "Invalid year parameter")
	}

	const currentYear = new Date().getFullYear()
	const maxYear = currentYear - 1

	if (year < 2001) {
		throw new AppError(400, `Year must be greater than or equal to 2001`)
	}

	if (year > maxYear) {
		throw new AppError(400, `Year must be less than or equal to ${maxYear}`)
	}

	req.middlewareData.year = year
	next()
}
