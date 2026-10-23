/**
 * SWAGGER-----------------------------------------------------------------------
 */
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.js"

/**
 * API-----------------------------------------------------------------------
 */
import express from "express"
import country from "./_world-bank/_routes.js"

/**
 * DATABASE-----------------------------------------------------------------------
 */
import pricesController from "./_fht/_routes.js"

/**
 * SERVICES-----------------------------------------------------------------------
 */

const app = express()

app.use(express.json())

// SWAGGER
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// AUTH
// app.use(apiKeyAuth)
// DB
app.use("/api/db/prices", pricesController)
app.use("/api/db/country", country)

const PORT = process.env.PORT || 3002
const ENV = process.env.NODE_ENV

app.listen(PORT, "0.0.0.0", () => {
	if (ENV == "dev") {
		console.log(ENV + " env," + " Backend -> http://localhost:" + PORT)
	} else if (ENV == "prod") {
		console.log(ENV + " env," + " Backend -> http://localhost:" + PORT)
	}
})
