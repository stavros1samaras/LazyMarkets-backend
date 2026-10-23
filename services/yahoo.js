import YahooFinance from "yahoo-finance2"

// const originalFetch = global.fetch;

// global.fetch = async (url, options) => {
//     console.log("➡️ REQUEST URL:", url);
//     console.log("➡️ REQUEST OPTIONS:", options);
//     const response = await originalFetch(url, options);
//     return response;
// };

const yf = new YahooFinance({
	suppressNotices: ["ripHistorical"],
	logger: {
		error: console.error,
		warn: console.warn,
		info: () => {},
		debug: () => {},
	},
	queue: {
		concurrency: 1,
	},
})

export default yf
