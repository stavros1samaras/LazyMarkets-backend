export const MARKET_ASSETS = {
	INDICES: [
		{ symbol: "GSPC", lower: "gspc", encoding: "%5EGSPC", dbSymbol: "^GSPC" },
		{ symbol: "IXIC", lower: "ixic", encoding: "%5EIXIC", dbSymbol: "^IXIC" },
		{ symbol: "FTSE", lower: "ftse", encoding: "%5EFTSE", dbSymbol: "^FTSE" },
		{ symbol: "FCHI", lower: "fchi", encoding: "%5EFCHI", dbSymbol: "^FCHI" },
		{ symbol: "GDAXI", lower: "gdaxi", encoding: "%5EGDAXI", dbSymbol: "^GDAXI" },
		{ symbol: "N100", lower: "n100", encoding: "%5EN100", dbSymbol: "^N100" },
	],

	BONDS: [{ symbol: "TNX", lower: "tnx", encoding: "%5ETNX", dbSymbol: "^TNX" }],

	ENERGY: [
		{ symbol: "WTI", lower: "wti", encoding: "CL%3DF", dbSymbol: "CL=F" },
		{ symbol: "NG", lower: "ng", encoding: "NG%3DF", dbSymbol: "NG=F" },
		{ symbol: "Brent", lower: "brent", encoding: "BZ%3DF", dbSymbol: "BZ=F" },
	],

	METALS: [
		{ symbol: "Gold", lower: "gold", encoding: "GC%3DF", dbSymbol: "GC=F" },
		{ symbol: "Silver", lower: "silver", encoding: "SI%3DF", dbSymbol: "SI=F" },
		{ symbol: "Copper", lower: "copper", encoding: "HG%3DF", dbSymbol: "HG=F" },
	],

	FOREX: [{ symbol: "EUR", lower: "eur", encoding: "EUR%3DX", dbSymbol: "EUR=X" }],
}
