/**
 * @swagger
 * tags:
 *   - name: Countries
 *     description: Country economic and demographic data from World Bank
 */

/**
 * @swagger
 * /api/db/country/get-country-data/{country}:
 *   get:
 *     tags: [Countries]
 *     summary: Get stored data for a specific country
 *     parameters:
 *       - name: country
 *         in: path
 *         required: true
 *         description: ISO 3166-1 alpha-2 country code
 *         example: GR
 *     responses:
 *       200:
 *         description: Country data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 country:
 *                   type: string
 *                   example: GR
 *                 population:
 *                   type: array
 *                 gdp:
 *                   type: array
 *       400:
 *         description: Invalid country parameter
 *       404:
 *         description: Country not found in database
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/db/country/set-country-data/{country}/{startYear}:
 *   get:
 *     tags: [Countries]
 *     summary: Fetch and insert economic indicators for a specific country
 *     description: Retrieves data from World Bank API and stores it in MongoDB
 *     parameters:
 *       - name: country
 *         in: path
 *         required: true
 *         description: ISO 3166-1 alpha-2 country code
 *         example: GR
 *       - name: startYear
 *         in: path
 *         required: true
 *         description: Starting year for data collection
 *         schema:
 *           type: integer
 *         example: 2005
 *     responses:
 *       200:
 *         description: Data inserted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 country:
 *                   type: string
 *                 startYear:
 *                   type: integer
 *                 endYear:
 *                   type: integer
 *                 results:
 *                   type: object
 *       400:
 *         description: Invalid country or year parameter
 *       500:
 *         description: Server error during data insertion
 */

/**
 * @swagger
 * /api/db/country/set-countries-data/{startYear}:
 *   get:
 *     tags: [Countries]
 *     summary: Fetch and store data for all configured countries
 *     description: Iterates through all countries and inserts their economic indicators
 *     parameters:
 *       - name: startYear
 *         in: path
 *         required: true
 *         description: Starting year for data collection
 *         schema:
 *           type: integer
 *         example: 2005
 *     responses:
 *       200:
 *         description: All countries data processed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allCountries:
 *                   type: array
 *                 startYear:
 *                   type: integer
 *                 endYear:
 *                   type: integer
 *                 results:
 *                   type: array
 *       400:
 *         description: Invalid start year parameter
 *       500:
 *         description: Server error during bulk data insertion
 */
