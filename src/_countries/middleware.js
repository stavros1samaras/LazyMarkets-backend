export const validateCountry = (req, res, next) => {
	const country = req.params.country?.toUpperCase()

	if (!country) {
		return res.status(400).json({ error: "Invalid country" })
	}

	req.middlewareData.country = country
	next()
}
