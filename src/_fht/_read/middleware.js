export const validateYear = (req, res, next) => {
	const year = parseInt(req.params.year, 10)

	if (Number.isNaN(year)) {
		return res.status(400).json({ error: "Invalid year" })
	}

	req.middlewareData.year = year
	next()
}
