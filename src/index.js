import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.js"
import express from "express"
import countryReadRouter from "./_countries/_read/routes.js"
import countryWriteRouter from "./_countries/_write/routes.js"
import fhtGetRouter from "./_fht/_read/routes.js"
import fhtSetRouter from "./_fht/_write/routes.js"

const app = express()

app.use(express.json())

// SWAGGER
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// MIDDLEWARE
app.use((req, res, next) => {
	req.middlewareData = {}

	const key = req.headers["x-api-key"]

	if (process.env.NODE_ENV === "prod") {
		if (key !== process.env.API_KEY) {
			return res.status(401).json({ error: "Unauthorized" })
		}
	}
	next()
})

// ROUTES
app.use("/api/db/prices", fhtGetRouter)
app.use("/api/db/prices", fhtSetRouter)
app.use("/api/db/country", countryReadRouter)
app.use("/api/db/country", countryWriteRouter)

const PORT = process.env.PORT || 3002
const ENV = process.env.NODE_ENV

app.listen(PORT, "0.0.0.0", () => {
	if (ENV == "dev") {
		console.log(ENV + " env, Backend -> http://localhost:" + PORT)
	} else {
		console.log(ENV + " env, Backend -> http://localhost:" + PORT)
	}
})
