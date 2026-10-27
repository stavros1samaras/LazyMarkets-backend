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
 * /fht/events/get-events:
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
 * /fht/get-all-symbols/{year}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get all symbols from MARKET_ASSETS for a given year
 *     description: Checks all symbols from all categories (INDICES, BONDS, ENERGY, METALS, FOREX) for the specified year. Returns structured data with database records or "not found" for each symbol.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to check (must be between 2001 and the previous year)
 *         schema:
 *           type: integer
 *           minimum: 2001
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
 *         description: Invalid year parameter or year outside the allowed range
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /fht/helpers/get-missing-symbols/{year}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get symbols that have no data for a given year
 *     description: Returns an array of symbols from all categories that do not have data in the database for the specified year. If all symbols have data, returns an empty array.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to check (must be between 2001 and the previous year)
 *         schema:
 *           type: integer
 *           minimum: 2001
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
 *         description: Invalid year parameter or year outside the allowed range
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /fht/insert-missing-symbols/{year}:
 *   post:
 *     tags: [FHT-NEXT]
 *     summary: Fetch and insert data for all symbols missing data for a given year
 *     description: Identifies symbols without data for the specified year, fetches historical data from Yahoo Finance for each missing symbol (with 20-second delays), and inserts the data into the FHT_NEXT collection. Returns the list of processed symbols.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year to fetch and insert data for (must be between 2001 and the previous year)
 *         schema:
 *           type: integer
 *           minimum: 2001
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
 *         description: Invalid year parameter or year outside the allowed range
 *       500:
 *         description: Internal server error during data fetching or insertion
 */

/**
 * @swagger
 * /fht/events/insert-symbols:
 *   post:
 *     tags: [FHT-NEXT]
 *     summary: Fetch and insert data for all missing symbols for all event years
 *     description: "Extracts the unique years from the EVENTS configuration and, for each year, identifies the symbols without data and fetches/inserts them into the FHT_NEXT collection. Results are keyed by year. This endpoint processes multiple years sequentially and each missing symbol is processed with a 20 second delay, so it can take a long time to complete."
 *     responses:
 *       200:
 *         description: Object containing the results for each processed event year
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: object
 *                 properties:
 *                   totalMissing:
 *                     type: integer
 *                     description: Number of missing symbols processed for this year
 *                   symbols:
 *                     type: array
 *                     description: Symbols that were processed for this year
 *                     items:
 *                       type: object
 *                       properties:
 *                         symbol:
 *                           type: string
 *                           description: The symbol name
 *                         dbSymbol:
 *                           type: string
 *                           description: The database symbol format
 *                         category:
 *                           type: string
 *                           description: The asset category
 *                         encoding:
 *                           type: string
 *                           description: The URL-encoded symbol
 *                         label:
 *                           type: string
 *                           description: Human-readable chart name
 *             example:
 *               "2020":
 *                 totalMissing: 2
 *                 symbols:
 *                   - symbol: "GSPC"
 *                     dbSymbol: "^GSPC"
 *                     category: "INDICES"
 *                     encoding: "%5EGSPC"
 *                     label: "S&P 500"
 *                   - symbol: "WTI"
 *                     dbSymbol: "CL=F"
 *                     category: "ENERGY"
 *                     encoding: "CL%3DF"
 *                     label: "Crude Oil"
 *               "2024":
 *                 totalMissing: 1
 *                 symbols:
 *                   - symbol: "N100"
 *                     dbSymbol: "^N100"
 *                     category: "INDICES"
 *                     encoding: "%5EN100"
 *                     label: "NASDAQ 100"
 *       500:
 *         description: Internal server error during data fetching or insertion
 */
