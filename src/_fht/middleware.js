export const validateTicker = (req, res, next) => {
	const symbol = req.params.symbol?.toUpperCase()

	if (!symbol) {
		return res.status(400).json({ error: "Invalid symbol" })
	}

	req.middlewareData.symbol = symbol
	next()
}
