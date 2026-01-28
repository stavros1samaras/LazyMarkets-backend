import yf from "../services/yahoo.js";
import { deleteByPath } from "./object.js";
import { delay } from "./common.js"

export async function insights(symbol) {
    if (!symbol) {
        throw new Error("Symbol is required");
    }

    const upperSymbol = symbol.toUpperCase();
    await delay();
    const insightsData = await yf.insights(upperSymbol);

    if (!insightsData) {
        throw new Error("No data returned from Yahoo Finance");
    }

    const excludeFields = [
        "upsellSearchDD",
        "events",
        "reports",
        "secReports",
        "sigDevs",
        "upsell"
    ];

    const filteredInsights = { ...insightsData };
    excludeFields.forEach(path => deleteByPath(filteredInsights, path));

    return {
        symbol: filteredInsights.symbol ?? upperSymbol,
        data: filteredInsights
    };
}
