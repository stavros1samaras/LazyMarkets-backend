import { insertPrices } from "../utils/insertPrices.js";

export async function fillTickerPrices(symbol, name, startYear, endYear) {
    try {
        const results = await insertPrices(symbol, name, startYear, endYear);
        return {
            status: 200,
            body: { symbol, name, results }
        };
    } catch (error) {
        return {
            status: 500,
            body: { error: error.message }
        };
    }
}
