import AppError from "../AppError.js"

export const validateTicker = (req, res, next) => {
	const symbol = req.params.symbol?.toUpperCase()

	if (!symbol) {
		throw new AppError(400, "Invalid or missing ticker symbol")
	}

	req.middlewareData.symbol = symbol
	next()
}
