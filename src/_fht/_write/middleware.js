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
