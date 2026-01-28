import { priceChart } from "./priceChart.js";
import { db } from "../db.js";
import { randomDelay10to30s } from "./common.js";

export async function insertPrices(symbol, name, startYear = 2018, endYear = 2026) {
    const results = [];

    startYear = startYear || 2018;
    endYear = endYear || 2026;

    for (let year = startYear; year <= endYear; year++) {
        const exists = await db.collection("prices").findOne({ symbol, year });
        if (exists) continue;

        await randomDelay10to30s();

        const period1 = `${year}-01-01`;
        const period2 = `${year + 1}-01-01`;

        const data = await priceChart(symbol, { period1, period2 });

        const doc = {
            symbol: data.symbol,
            name,
            year,
            count: data.count,
            data: data.data
        };

        await db.collection("prices").insertOne(doc);
        results.push({ year, status: "inserted" });
    }

    return results;
}
