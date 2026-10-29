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
			"Extensive US tariffs announced in April 2025 triggered sharp global stock market declines, Treasury market volatility, and concerns about a trade war, inflation, and slower economic growth.",
	},
	{
		code: "AIStckRally",
		label: "AI Stock Rally",
		date: "15-06-24",
		year: "2024",
		description:
			"The artificial intelligence boom drove strong gains in major technology stocks, particularly semiconductor and data center companies, lifting the Nasdaq and S&P 500 while raising concerns about market concentration and valuations.",
	},
	{
		code: "YenCarryUnwind",
		label: "Yen Carry Trade Unwind",
		date: "05-08-24",
		year: "2024",
		description:
			"A sharp strengthening of the Japanese yen and concerns about the US economy triggered the unwinding of leveraged carry trades, contributing to a historic one-day selloff in Japanese equities and a global volatility spike.",
	},
	{
		code: "IsraelHamasWar",
		label: "Israel-Hamas War",
		date: "09-10-23",
		year: "2023",
		description:
			"The outbreak of the Israel-Hamas war increased geopolitical uncertainty in the Middle East, affecting gold prices, oil market expectations, and investor demand for safe-haven assets.",
	},
	{
		code: "SVBBankingCrisis",
		label: "US Banking Crisis",
		date: "10-03-23",
		year: "2023",
		description:
			"The collapse of Silicon Valley Bank and subsequent banking turmoil raised concerns about financial stability, triggered sharp movements in Treasury yields, and increased expectations of changes in Federal Reserve policy.",
	},
	{
		code: "FedRateHikes",
		label: "Global Rate Hikes",
		date: "16-03-22",
		year: "2022",
		description:
			"The Federal Reserve began raising interest rates aggressively in response to persistent inflation. Rising yields pressured bond prices and growth stocks, while the US dollar strengthened during several phases of monetary tightening.",
	},
	{
		code: "RussiaUkraineWar",
		label: "Russia-Ukraine War",
		date: "24-02-22",
		year: "2022",
		description:
			"Russia's invasion of Ukraine triggered a major geopolitical and energy shock, driving volatility in oil, natural gas, gold, European equities, and inflation expectations.",
	},
	{
		code: "GlobalInflation",
		label: "Global Inflation Shock",
		date: "10-11-21",
		year: "2021",
		description:
			"Supply chain disruptions, recovering consumer demand, and rising energy costs intensified inflation concerns, influencing bond yields and setting the stage for aggressive central bank tightening.",
	},
	{
		code: "GlblPndmcPnc",
		label: "COVID-19 Market Crash",
		date: "11-03-20",
		year: "2020",
		description:
			"The WHO declared COVID-19 a global pandemic, intensifying a worldwide market selloff. Equities plunged, volatility surged, oil demand collapsed, and central banks introduced emergency monetary measures.",
	},
	{
		code: "USChinaTradeWar",
		label: "US-China Trade War",
		date: "06-07-18",
		year: "2018",
		description:
			"The United States and China imposed escalating tariffs on each other's goods, increasing fears of slower global growth and disrupting equities, industrial commodities, and international supply chains.",
	},
	{
		code: "BrexitReferendum",
		label: "Brexit Referendum",
		date: "24-06-16",
		year: "2016",
		description:
			"The United Kingdom voted to leave the European Union, causing a sharp decline in the British pound, initial selloffs in European equities, and increased demand for safe-haven assets.",
	},
	{
		code: "OilPriceCrash",
		label: "Oil Price Crash",
		date: "01-07-14",
		year: "2014",
		description:
			"An oil supply glut and weaker demand expectations drove crude prices sharply lower from mid-2014 through early 2016, pressuring energy companies and oil-exporting economies.",
	},
	{
		code: "TaperTantrum",
		label: "Federal Reserve Taper Tantrum",
		date: "22-05-13",
		year: "2013",
		description:
			"Federal Reserve Chair Ben Bernanke indicated that asset purchases could be reduced, triggering a sharp rise in US Treasury yields and capital outflows from several emerging markets.",
	},
	{
		code: "EuroDebtCrisis",
		label: "European Sovereign Debt Crisis",
		date: "23-04-10",
		year: "2010",
		description:
			"Concerns about Greece's sovereign debt and the stability of the euro area triggered sharp increases in peripheral government bond yields, pressure on the euro, and volatility in European equities.",
	},
	{
		code: "GlobalFinancialCrisis",
		label: "Global Financial Crisis",
		date: "15-09-08",
		year: "2008",
		description:
			"The bankruptcy of Lehman Brothers intensified the global financial crisis. Stock markets collapsed, credit markets froze, oil prices plunged, and investors sought the relative safety of government bonds.",
	},
	{
		code: "OilPricePeak",
		label: "Oil Price Surge",
		date: "11-07-08",
		year: "2008",
		description:
			"Crude oil reached a record nominal price near $147 per barrel amid strong demand, supply concerns, and speculative activity before the global financial crisis triggered a dramatic reversal.",
	},
	{
		code: "IraqWar",
		label: "Iraq War",
		date: "20-03-03",
		year: "2003",
		description:
			"The US-led invasion of Iraq increased geopolitical uncertainty surrounding Middle Eastern oil supplies. Energy prices and gold fluctuated, while global equities reacted to changing expectations about the conflict.",
	},
]

export const EVENTS_ROUTES = EVENTS.map((event) => event.code)

export const EVENTS_LABELS_WITH_CODES = EVENTS.map(({ code, label }) => ({ code, label }))
