import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.js"
import express from "express"
import countryRouter from "./_countries/_routes.js"
import fhtRouter from "./_fht/_routes.js"

const app = express()

app.use(express.json())

// SWAGGER
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// MIDDLEWARE

app.use((req, res, next) => {
	const key = req.headers["x-api-key"]

	if (process.env.NODE_ENV === "prod") {
		if (key !== process.env.API_KEY) {
			return res.status(401).json({ error: "Unauthorized" })
		}
	}
	next()
})

// DB
app.use("/api/db/prices", fhtRouter)
app.use("/api/db/country", countryRouter)

const PORT = process.env.PORT || 3002
const ENV = process.env.NODE_ENV

app.listen(PORT, "0.0.0.0", () => {
	if (ENV == "dev") {
		console.log(ENV + " env," + " Backend -> http://localhost:" + PORT)
	} else if (ENV == "prod") {
		console.log(ENV + " env," + " Backend -> http://localhost:" + PORT)
	}
})
