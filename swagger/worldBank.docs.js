/**
 * @swagger
 * tags:
 *   - name: DB
 */

/**
 * @swagger
 * /api/db/country/get-country-data/{country}:
 *   get:
 *     tags: [DB]
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
 *     tags: [DB]
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
