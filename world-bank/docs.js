/**
 * @swagger
 * tags:
 *   - name: Countries
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
 *         example: GR
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Country not found
 */
/**
 * @swagger
 * /api/db/country/set-country-data/{country}/{startYear}:
 *   get:
 *     tags: [Countries]
 *     summary: Insert population data into DB
 *     parameters:
 *       - name: country
 *         in: path
 *         required: true
 *         example: GR
 *       - name: startYear
 *         in: path
 *         required: true
 *         example: 2005
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/db/country/set-countries-data/{startYear}:
 *   get:
 *     tags:
 *       - Countries
 *     summary: Fetch and store data for all countries
 *     parameters:
 *       - name: startYear
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2005
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
