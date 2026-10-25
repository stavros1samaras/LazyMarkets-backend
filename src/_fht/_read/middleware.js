import AppError from "../../AppError.js"

export const validateYear = (req, res, next) => {
	const year = parseInt(req.params.year, 10)

	if (Number.isNaN(year)) {
		throw new AppError(400, "Invalid year parameter")
	}

	req.middlewareData.year = year
	next()
}
