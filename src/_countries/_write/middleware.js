export const validateStartYear = (req, res, next) => {
	const startYear = parseInt(req.params.startYear, 10)

	if (Number.isNaN(startYear)) {
		return res.status(400).json({ error: "Invalid start year" })
	}

	req.middlewareData.startYear = startYear
	next()
}

export const validateYearRange = (req, res, next) => {
	const endYear = 2025
	req.middlewareData.endYear = endYear
	next()
}
