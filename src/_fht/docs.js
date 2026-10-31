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
 * /fht/events/get-event-codes:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get the event codes
 *     description: Returns an array containing only the codes of the market events, derived from the EVENTS configuration.
 *     responses:
 *       200:
 *         description: Array of event codes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *             example:
 *               - "TrmpTrrffShck"
 *               - "TrmpTrrffShck2"
 *               - "TchStckRlly"
 *               - "LPrcCrsh"
 *               - "FdrlRsrvRtHk"
 *               - "GlblPndmcPnc"
 */

/**
 * @swagger
 * /fht/events/get-event-labels-with-codes:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get the event labels
 *     description: Returns an array of objects containing the code and label of each market event.
 *     responses:
 *       200:
 *         description: Array of event code/label pairs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: string
 *                   label:
 *                     type: string
 *             example:
 *               - code: "TrmpTrrffShck"
 *                 label: "Trump Tariff Shock"
 *               - code: "GlblPndmcPnc"
 *                 label: "COVID-19 Market Crash"
 */

/**
 * @swagger
 * /fht/events/get-event-data/{eventCode}:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get data for an event
 *     description: Returns the event matching the provided event code.
 *     parameters:
 *       - name: eventCode
 *         in: path
 *         required: true
 *         description: The event code
 *         schema:
 *           type: string
 *         example: IraqWar
 *     responses:
 *       200:
 *         description: The matching event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                 label:
 *                   type: string
 *                 date:
 *                   type: string
 *                 year:
 *                   type: string
 *                 description:
 *                   type: string
 *                 data:
 *                   type: array
 *                   description: Market asset records for the event's year
 *                   items:
 *                     type: object
 *                     properties:
 *                       symbol:
 *                         type: string
 *                       name:
 *                         type: string
 *                       category:
 *                         type: string
 *                         description: The asset category
 *                       count:
 *                         type: integer
 *                       data:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             date:
 *                               type: string
 *                             close:
 *                               type: number
 *             example:
 *               code: "IraqWar"
 *               label: "Iraq War"
 *               date: "20-03-03"
 *               year: "2003"
 *               description: "The US-led invasion of Iraq increased geopolitical uncertainty..."
 *               data:
 *                 - symbol: "^GSPC"
 *                   name: "S&P 500"
 *                   category: "Indices-US"
 *                   count: 252
 *                   data:
 *                     - date: "02-01-03"
 *                       close: 909.03
 *       404:
 *         description: Event code not found
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
 *                       category:
 *                         type: string
 *                         description: The asset category
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
 *                   label:
 *                     type: string
 *                     description: Human-readable chart name
 *             example:
 *               - symbol: "N100"
 *                 dbSymbol: "^N100"
 *                 category: "Indices-EU"
 *                 encoding: "%5EN100"
 *                 label: "Euronext 100"
 *               - symbol: "Copper"
 *                 dbSymbol: "HG=F"
 *                 category: "Metals"
 *                 encoding: "HG%3DF"
 *                 label: "Copper"
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
 *                 category: "Indices-EU"
 *                 encoding: "%5EN100"
 *                 label: "Euronext 100"
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
 *                     category: "Indices-US"
 *                     encoding: "%5EGSPC"
 *                     label: "S&P 500"
 *                   - symbol: "WTI"
 *                     dbSymbol: "CL=F"
 *                     category: "Energy"
 *                     encoding: "CL%3DF"
 *                     label: "Crude Oil"
 *               "2024":
 *                 totalMissing: 1
 *                 symbols:
 *                   - symbol: "N100"
 *                     dbSymbol: "^N100"
 *                     category: "Indices-EU"
 *                     encoding: "%5EN100"
 *                     label: "Euronext 100"
 *       500:
 *         description: Internal server error during data fetching or insertion
 */

/**
 * @swagger
 * /fht/delete-year/{year}:
 *   delete:
 *     tags: [FHT-NEXT]
 *     summary: Delete all records for a given year
 *     description: Deletes all documents with the specified year from the FHT_NEXT collection.
 *     parameters:
 *       - name: year
 *         in: path
 *         required: true
 *         description: Year of the records to delete (must be between 2001 and the previous year)
 *         schema:
 *           type: integer
 *           minimum: 2001
 *         example: 2024
 *     responses:
 *       200:
 *         description: Number of deleted records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 year:
 *                   type: integer
 *                 deletedCount:
 *                   type: integer
 *             example:
 *               year: 2024
 *               deletedCount: 14
 *       400:
 *         description: Invalid year parameter or year outside the allowed range
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /fht/get-asset-categories:
 *   get:
 *     tags: [FHT-NEXT]
 *     summary: Get all asset categories
 *     description: Returns an array containing every distinct category defined in MARKET_ASSETS, in the order they first appear.
 *     responses:
 *       200:
 *         description: Array of asset categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *             example:
 *               - "Indices-US"
 *               - "Indices-EU"
 *               - "Bonds"
 *               - "Energy"
 *               - "Metals"
 *               - "Forex"
 */
