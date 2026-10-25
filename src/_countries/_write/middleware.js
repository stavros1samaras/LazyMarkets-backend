import AppError from "../../AppError.js"

export const validateStartYear = (req, res, next) => {
	const startYear = parseInt(req.params.startYear, 10)

	if (Number.isNaN(startYear)) {
		throw new AppError(400, "Invalid start year parameter")
	}

	req.middlewareData.startYear = startYear
	next()
}

export const validateYearRange = (req, res, next) => {
	const endYear = 2025
	req.middlewareData.endYear = endYear
	next()
}
