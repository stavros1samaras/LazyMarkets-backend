/**
 * @swagger
 * tags:
 *   - name: FHT
 *     description: Database
 */

/**
 * @swagger
 * /prices/insert-ticker-prices/{symbol}/{name}:
 *   get:
 *     tags: [FHT]
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
 * /prices/get-ticker-one-year/{symbol}/{year}:
 *   get:
 *     tags: [FHT]
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

/**
 * @swagger
 * /api/db/prices/insert-ticker-prices/{symbol}/{name}:
 *   get:
 *     tags: [FHT]
 *     deprecated: true
 *     summary: "(Legacy) Fill the database with historical prices for a given ticker"
 *     description: Legacy path kept for backward compatibility. Use `/prices/insert-ticker-prices/{symbol}/{name}` instead.
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
 *     tags: [FHT]
 *     deprecated: true
 *     summary: "(Legacy) Get ticker prices from DB for a specific year"
 *     description: Legacy path kept for backward compatibility. Use `/prices/get-ticker-one-year/{symbol}/{year}` instead.
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
