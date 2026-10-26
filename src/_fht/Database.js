export const MARKET_ASSETS = {
	INDICES: [
		{ symbol: "GSPC", lower: "gspc", encoding: "%5EGSPC" },
		{ symbol: "IXIC", lower: "ixic", encoding: "%5EIXIC" },
		{ symbol: "FTSE", lower: "ftse", encoding: "%5EFTSE" },
		{ symbol: "FCHI", lower: "fchi", encoding: "%5EFCHI" },
		{ symbol: "GDAXI", lower: "gdaxi", encoding: "%5EGDAXI" },
		{ symbol: "N100", lower: "n100", encoding: "%5EN100" },
	],

	BONDS: [{ symbol: "TNX", lower: "tnx", encoding: "%5ETNX" }],

	ENERGY: [
		{ symbol: "WTI", lower: "wti", encoding: "CL%3DF" },
		{ symbol: "NG", lower: "ng", encoding: "NG%3DF" },
		{ symbol: "Brent", lower: "brent", encoding: "BZ%3DF" },
	],

	METALS: [
		{ symbol: "Gold", lower: "gold", encoding: "GC%3DF" },
		{ symbol: "Silver", lower: "silver", encoding: "SI%3DF" },
		{ symbol: "Copper", lower: "copper", encoding: "HG%3DF" },
	],

	FOREX: [
		{ symbol: "EUR", lower: "eur", encoding: "EUR%3DX" },
		{ symbol: "CNY", lower: "cny", encoding: "CNY%3DX" },
		{ symbol: "RUB", lower: "rub", encoding: "RUB%3DX" },
	],
}
