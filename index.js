/**
 * SWAGGER-----------------------------------------------------------------------
 */
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

/**
 * API-----------------------------------------------------------------------
 */
import express from "express";
import quoteRoute from "./routes/quote.route.js";
import insightsRoute from "./routes/insights.route.js";
import quoteSummaryRoute from "./routes/quoteSummary.route.js";
import quoteSummary2 from "./routes/quoteSummary2.route.js";
import recommendationsRoute from "./routes/recommendations.route.js";
import searchRoute from "./routes/search.route.js";
import balanceSheetRoute from "./routes/balanceSheet.route.js";
import financials from "./routes/financials.route.js";
import cashFlow from "./routes/cashFlow.route.js";
import historical from "./routes/historical.route.js";
import options from "./routes/options.route.js";
import priceChart from "./routes/priceChart.route.js";
import insertPrices from "./routes/insertPrices.js";
import country from "./world bank/routes/country.js";

import { apiKeyAuth } from "./utils/common.js";

/**
 * DATABASE-----------------------------------------------------------------------
 */
import pricesController from "./database/routes/prices.controller.js";
import { db } from "./db.js";

/**
 * SERVICES-----------------------------------------------------------------------
 */
import yf from "./services/yahoo.js";

const app = express();

app.use(express.json());

// SWAGGER
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// AUTH
// app.use(apiKeyAuth);
// API
app.use("/api/quote", quoteRoute);
app.use("/api/insights", insightsRoute);
app.use("/api/quote-summary", quoteSummaryRoute);
app.use("/api/quote-summary2", quoteSummary2);
app.use("/api/recommendations", recommendationsRoute);
app.use("/api/search", searchRoute);
app.use("/api/balance-sheet", balanceSheetRoute);
app.use("/api/financials", financials);
app.use("/api/cash-flow", cashFlow);
app.use("/api/historical", historical);
app.use("/api/priceChart", priceChart);
app.use("/api/options", options);
app.use("/api/fill-db-with-ticker-prices", insertPrices);
// DB
app.use("/api/db/prices", pricesController);
app.use("/api/db/country", country);

// import qaRoute from "./qa.js";
// app.use("/api/qa", qaRoute);


app.get("/getSentence", async (req, res) => {

  res.json(`As the sun slowly set behind the snow-capped mountains, painting the sky with breathtaking shades of orange, pink, and deep purple, the young traveler sat alone at the edge of the old wooden bridge, gazing at the river flowing gently beneath him, thinking about everything he had left behind in the city — his friends, his memories, the dreams he never had the courage to pursue — and wondered whether it was ever truly too late for a person to start over and finally live the life they had always imagined for themselves.As the sun slowly set behind the snow-capped mountains, painting the sky with breathtaking shades of orange, pink, and deep purple, the young traveler sat alone at the edge of the old wooden bridge, gazing at the river flowing gently beneath him, thinking about everything he had left behind in the city — his friends, his memories, the dreams he never had the courage to pursue — and wondered whether it was ever truly too late for a person to start over and finally live the life they had always imagined for themselves.`)
});

const PORT = process.env.PORT || 3002;
const ENV = process.env.NODE_ENV;

app.listen(PORT, "0.0.0.0", () => {
  if (ENV == "dev") {
    console.log(ENV + " env," + " Backend -> http://localhost:" + PORT);
  } else if (ENV == "prod") {
    console.log(ENV + " env," + " Backend -> http://localhost:" + PORT);
  }
});
