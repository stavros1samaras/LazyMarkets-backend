/**
 * @swagger
 * tags:
 *   - name: FHT
 *     description: Database
 *   - name: FHT-NEXT
 *     description: Next generation FHT endpoints
 */

/**
 * @swagger
 * /prices/get-events:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get all market events
 *     description: Returns an array of significant market events with their codes, labels, dates, years, and descriptions.
 *     responses:
 *       200:
 *         description: Array of market events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: string
 *                     description: Unique event code
 *                   label:
 *                     type: string
 *                     description: Human-readable event name
 *                   date:
 *                     type: string
 *                     description: Event date in DD-MM-YY format
 *                   year:
 *                     type: string
 *                     description: Event year
 *                   description:
 *                     type: string
 *                     description: Detailed description of the event
 *             example:
 *               - code: "TrmpTrrffShck"
 *                 label: "Trump Tariff Shock"
 *                 date: "04-04-25"
 *                 year: "2025"
 *                 description: "The announcement of significant new tariffs..."
 *               - code: "GlblPndmcPnc"
 *                 label: "Global Pandemic Panic"
 *                 date: "11-03-20"
 *                 year: "2020"
 *                 description: "The declaration of a global pandemic..."
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
 * /prices/check-all-symbols/{year}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Check all symbols from MARKET_ASSETS for a given year
 *     description: Checks all symbols from all categories (INDICES, BONDS, ENERGY, METALS, FOREX) for the specified year. Returns structured data with database records or "not found" for each symbol.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to check (must be <= 2025)
 *         schema:
 *           type: integer
 *           maximum: 2025
 *         example: 2024
 *     responses:
 *       200:
 *         description: Structured data for all symbols organized by category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 INDICES:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       symbol:
 *                         type: string
 *                       lower:
 *                         type: string
 *                       encoding:
 *                         type: string
 *                       data:
 *                         oneOf:
 *                           - type: object
 *                             description: Database record if found
 *                           - type: string
 *                             example: "not found"
 *                 BONDS:
 *                   type: array
 *                   items:
 *                     type: object
 *                 ENERGY:
 *                   type: array
 *                   items:
 *                     type: object
 *                 METALS:
 *                   type: array
 *                   items:
 *                     type: object
 *                 FOREX:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: Invalid year parameter or year greater than 2025
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /prices/missing-symbols/{year}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get symbols that have no data for a given year
 *     description: Returns an array of symbols from all categories that do not have data in the database for the specified year. If all symbols have data, returns an empty array.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to check (must be <= 2025)
 *         schema:
 *           type: integer
 *           maximum: 2025
 *         example: 2024
 *     responses:
 *       200:
 *         description: Array of symbols without data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   symbol:
 *                     type: string
 *                     description: The symbol name
 *                   dbSymbol:
 *                     type: string
 *                     description: The database symbol format
 *                   category:
 *                     type: string
 *                     description: The asset category
 *                   encoding:
 *                     type: string
 *                     description: The URL-encoded symbol
 *             example:
 *               - symbol: "N100"
 *                 dbSymbol: "^N100"
 *                 category: "INDICES"
 *                 encoding: "%5EN100"
 *               - symbol: "Copper"
 *                 dbSymbol: "HG=F"
 *                 category: "METALS"
 *                 encoding: "HG%3DF"
 *       400:
 *         description: Invalid year parameter or year greater than 2025
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /prices/fetch-missing-symbols/{year}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Fetch and insert data for all symbols missing data for a given year
 *     description: Identifies symbols without data for the specified year, fetches historical data from Yahoo Finance for each missing symbol (with 20-second delays), and inserts the data into the FHT_NEXT collection. Returns the list of processed symbols.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to fetch and insert data for (must be <= 2025)
 *         schema:
 *           type: integer
 *           maximum: 2025
 *         example: 2024
 *     responses:
 *       200:
 *         description: Array of symbols that were processed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   symbol:
 *                     type: string
 *                     description: The symbol name
 *                   dbSymbol:
 *                     type: string
 *                     description: The database symbol format
 *                   category:
 *                     type: string
 *                     description: The asset category
 *                   encoding:
 *                     type: string
 *                     description: The URL-encoded symbol
 *                   label:
 *                     type: string
 *                     description: Human-readable chart name
 *             example:
 *               - symbol: "N100"
 *                 dbSymbol: "^N100"
 *                 category: "INDICES"
 *                 encoding: "%5EN100"
 *                 label: "NASDAQ 100"
 *       400:
 *         description: Invalid year parameter or year greater than 2025
 *       500:
 *         description: Internal server error during data fetching or insertion
 */

/**
 * @swagger
 * /prices/fetch-event-years-data:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Fetch and insert data for all missing symbols for all event years
 *     description: Extracts unique years from the EVENTS configuration, then for each year, identifies and fetches data for all missing symbols. This is a comprehensive endpoint that processes multiple years sequentially. Note: This operation may take a long time due to 20-second delays between each symbol fetch.
 *     responses:
 *       200:
 *         description: Object containing results for each event year
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: object
 *                 properties:
 *                   totalMissing:
 *                     type: integer
 *                     description: Number of missing symbols for this year
 *                   symbols:
 *                     type: array
 *                     description: List of processed symbols
 *                     items:
 *                       type: object
 *                       properties:
 *                         symbol:
 *                           type: string
 *                         dbSymbol:
 *                           type: string
 *                         category:
 *                           type: string
 *                         encoding:
 *                           type: string
 *                         label:
 *                           type: string
 *             example:
 *               "2020":
 *                 totalMissing: 2
 *                 symbols:
 *                   - symbol: "GSPC"
 *                     dbSymbol: "^GSPC"
 *                     category: "INDICES"
 *                     encoding: "%5EGSPC"
 *                     label: "S&P 500"
 *               "2024":
 *                 totalMissing: 1
 *                 symbols:
 *                   - symbol: "WTI"
 *                     dbSymbol: "CL=F"
 *                     category: "ENERGY"
 *                     encoding: "CL%3DF"
 *                     label: "Crude Oil"
 *       500:
 *         description: Internal server error during data fetching or insertion
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
