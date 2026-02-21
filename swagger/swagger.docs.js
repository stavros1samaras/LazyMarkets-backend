/**
 * @swagger
 * tags:
 *   - name: DB
 *     description: Database
 *   - name: General
 *     description: General information
 *   - name: Fundamentals
 *     description: Financial statements (balance sheet, cash flow, financials)
 *   - name: Enhancement
 *     description: Stock recommendations
 */

/** PRICE CHART - SWAGGER UI
 * @swagger
 * /api/priceChart/{symbol}:
 *   get:
 *     tags: [General]
 *     summary: Get historical price chart
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *       - name: period1
 *         in: query
 *         required: true
 *         example: 2023-01-01
 *       - name: period2
 *         in: query
 *         required: true
 *         example: 2024-01-01
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 * /api/db/prices/insert-ticker-prices/{symbol}/{name}:
 *   get:
 *     tags: [DB]
 *     summary: Fill the database with historical prices for a given ticker
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         description: The ticker symbol (e.g., ^GSPC)
 *         example: ^GSPC
 *       - name: name
 *         in: path
 *         required: true
 *         description: Human-readable name for the ticker
 *         example: S&P 500
 *       - name: startYear
 *         in: query
 *         required: false
 *         description: Optional start year (defaults to 2018)
 *         example: 2020
 *       - name: endYear
 *         in: query
 *         required: false
 *         description: Optional end year (defaults to 2026)
 *         example: 2022
 *     responses:
 *       200:
 *         description: Prices inserted successfully
 *         content:
 *           application/json:
 *             example:
 *               symbol: ^GSPC
 *               name: S&P 500
 *               results:
 *                 - year: 2020
 *                   status: inserted
 *                 - year: 2021
 *                   status: inserted
 *       400:
 *         description: Missing symbol or name route parameter
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/db/prices/get-ticker-one-year/{symbol}/{year}:
 *   get:
 *     tags: [DB]
 *     summary: Get ticker prices from DB for a specific year
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: ^GSPC
 *       - name: year
 *         in: path
 *         required: true
 *         example: 2024
 *     responses:
 *       200:
 *         description: OK
 */

/** INSIGHTS - SWAGGER UI
 * @swagger
 * /api/insights/{symbol}:
 *   get:
 *     tags: [General]
 *     summary: Get stock insights
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */

/** QUOTE - SWAGGER UI
 * @swagger
 * /api/quote/{symbol}:
 *   get:
 *     tags: [General]
 *     summary: Get stock quote
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */

/** QUOTE SUMMARY - SWAGGER UI
 * @swagger
 * /api/quote-summary/{symbol}:
 *   get:
 *     tags: [General]
 *     summary: Get quote summary
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */

/** BALANCE SHEET - SWAGGER UI
 * @swagger
 * /api/balance-sheet/{symbol}:
 *   get:
 *     tags: [Fundamentals]
 *     summary: Get balance sheet data
 *     description: Returns balance sheet data for a given symbol and period.
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         description: Stock ticker symbol
 *         example: AAPL
 *
 *       - name: period1
 *         in: query
 *         required: true
 *         description: Start date (YYYY-MM-DD)
 *         example: 2024-01-01
 *
 *       - name: period2
 *         in: query
 *         required: true
 *         description: End date (YYYY-MM-DD)
 *         example: 2025-01-01
 *
 *       - name: type
 *         in: query
 *         required: true
 *         description: Period type
 *         schema:
 *           type: string
 *           enum: [annual, quarterly]
 *         example: quarterly
 *
 *     responses:
 *       200:
 *         description: OK
 */

/** FINANCIALS - SWAGGER UI
 * @swagger
 * /api/financials/{symbol}:
 *   get:
 *     tags: [Fundamentals]
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: AAPL
 *
 *       - name: period1
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2024-01-01
 *
 *       - name: period2
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2025-01-01
 *
 *       - name: type
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: quarterly
 *
 *     responses:
 *       200:
 *         description: OK
 */

/** CASH FLOW - SWAGGER UI
 * @swagger
 * /api/cash-flow/{symbol}:
 *   get:
 *     tags: [Fundamentals]
 *     summary: Get cash flow data
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: AAPL
 *
 *       - name: period1
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2024-01-01
 *
 *       - name: period2
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2025-01-01
 *
 *       - name: type
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: quarterly
 *
 *     responses:
 *       200:
 *         description: OK
 */

/** RECOMMENDATIONS - SWAGGER UI
 * @swagger
 * /api/recommendations/{symbol}:
 *   get:
 *     tags: [Enhancement]
 *     summary: Get stock recommendations
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */

/** OPTIONS - SWAGGER UI
 * @swagger
 * /api/options/{symbol}:
 *   get:
 *     tags: [Enhancement]
 *     summary: Get stock options
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */

/** HISTORICAL - SWAGGER UI
 * @swagger
 * /api/historical/{symbol}:
 *   get:
 *     tags: [Enhancement]
 *     summary: Get historical data
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: AAPL
 *
 *       - name: period1
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2024-01-01
 *
 *       - name: period2
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: 2025-01-01
 *
 *     responses:
 *       200:
 *         description: OK
 */

/** SEARCH - SWAGGER UI
 * @swagger
 * /api/search/{symbol}:
 *   get:
 *     tags: [Enhancement]
 *     summary: Search for stocks
 *     parameters:
 *       - name: symbol
 *         in: path
 *         required: true
 *         example: AAPL
 *     responses:
 *       200:
 *         description: OK
 */
