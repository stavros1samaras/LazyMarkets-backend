export const MARKET_ASSETS = {
	INDICES: [
		{
			symbol: "GSPC",
			lower: "gspc",
			encoding: "%5EGSPC",
			dbSymbol: "^GSPC",
			label: "S&P 500",
		},
		{
			symbol: "IXIC",
			lower: "ixic",
			encoding: "%5EIXIC",
			dbSymbol: "^IXIC",
			label: "NASDAQ",
		},
		{
			symbol: "FTSE",
			lower: "ftse",
			encoding: "%5EFTSE",
			dbSymbol: "^FTSE",
			label: "FTSE 100",
		},
		{
			symbol: "FCHI",
			lower: "fchi",
			encoding: "%5EFCHI",
			dbSymbol: "^FCHI",
			label: "CAC 40",
		},
		{
			symbol: "GDAXI",
			lower: "gdaxi",
			encoding: "%5EGDAXI",
			dbSymbol: "^GDAXI",
			label: "DAX",
		},
		{
			symbol: "N100",
			lower: "n100",
			encoding: "%5EN100",
			dbSymbol: "^N100",
			label: "NASDAQ 100",
		},
	],

	BONDS: [
		{
			symbol: "TNX",
			lower: "tnx",
			encoding: "%5ETNX",
			dbSymbol: "^TNX",
			label: "10-Year Treasury",
		},
	],

	ENERGY: [
		{
			symbol: "WTI",
			lower: "wti",
			encoding: "CL%3DF",
			dbSymbol: "CL=F",
			label: "Crude Oil",
		},
		{
			symbol: "NG",
			lower: "ng",
			encoding: "NG%3DF",
			dbSymbol: "NG=F",
			label: "Natural Gas",
		},
		{
			symbol: "Brent",
			lower: "brent",
			encoding: "BZ%3DF",
			dbSymbol: "BZ=F",
			label: "Brent Crude",
		},
	],

	METALS: [
		{
			symbol: "Gold",
			lower: "gold",
			encoding: "GC%3DF",
			dbSymbol: "GC=F",
			label: "Gold",
		},
		{
			symbol: "Silver",
			lower: "silver",
			encoding: "SI%3DF",
			dbSymbol: "SI=F",
			label: "Silver",
		},
		{
			symbol: "Copper",
			lower: "copper",
			encoding: "HG%3DF",
			dbSymbol: "HG=F",
			label: "Copper",
		},
	],

	FOREX: [
		{
			symbol: "EUR",
			lower: "eur",
			encoding: "EUR%3DX",
			dbSymbol: "EUR=X",
			label: "EUR/USD",
		},
	],
}

export const EVENTS = [
	{
		code: "TrmpTrrffShck",
		label: "Trump Tariff Shock",
		date: "04-04-25",
		year: "2025",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
	},
	{
		code: "TrmpTrrffShck2",
		label: "Trump Tariff Shock2",
		date: "04-04-24",
		year: "2024",
		description:
			"The announcement of significant new tariffs by US President Donald Trump in early April 2025 caused intense volatility in the stock markets, with sharp drops in indices like the Dow Jones and S&P 500 as investors feared a trade war and a slowdown in economic growth.",
	},
	{
		code: "TchStckRlly",
		label: "Tech Stock Rally",
		date: "15-06-24",
		year: "2024",
		description:
			"A surge in major tech stocks including Apple, Microsoft, and Google led to a strong market rally, driven by impressive quarterly earnings and optimistic future guidance.",
	},
	{
		code: "LPrcCrsh",
		label: "Oil Price Crash",
		date: "10-09-23",
		year: "2023",
		description:
			"Global oil prices fell sharply due to oversupply and decreased demand forecasts, impacting energy sector stocks and causing broader market concern.",
	},
	{
		code: "FdrlRsrvRtHk",
		label: "Federal Reserve Rate Hike",
		date: "20-12-22",
		year: "2022",
		description:
			"The US Federal Reserve announced a significant interest rate hike to combat inflation, causing a temporary decline in stock markets and increased bond yields.",
	},
	{
		code: "GlblPndmcPnc",
		label: "Global Pandemic Panic",
		date: "11-03-20",
		year: "2020",
		description:
			"The declaration of a global pandemic caused massive sell-offs in stock markets worldwide, with unprecedented volatility in multiple sectors.",
	},
]
