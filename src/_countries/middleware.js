import AppError from "../AppError.js"

export const validateCountry = (req, res, next) => {
	const country = req.params.country?.toUpperCase()

	if (!country) {
		throw new AppError(400, "Invalid or missing country code")
	}

	req.middlewareData.country = country
	next()
}
