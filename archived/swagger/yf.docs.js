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
