import { priceChart } from "../utils/priceChart.js";

export async function getPriceChart(symbol, query) {
    try {
        const data = await priceChart(symbol, query);

        return {
            status: 200,
            body: {
                ...data,
            }
        };
    } catch (error) {
        return {
            status: 500,
            body: {
                error: error.message
            }
        };
    }
}