export const indicators = [
	// 1. Economic / Macro
	{ indicator: "NY.GDP.MKTP.CD", key: "gdp" }, // GDP (current US$)
	{ indicator: "NY.GDP.PCAP.CD", key: "gdpPerCapita" }, // GDP per capita (current US$)
	{ indicator: "NY.GDP.MKTP.KD.ZG", key: "gdpGrowthRate" }, // GDP growth (annual %)
	{ indicator: "NY.GDP.PCAP.KD.ZG", key: "gdpPerCapitaGrowth" }, // GDP per capita growth (annual %)
	{ indicator: "NY.GDP.DEFL.KD.ZG", key: "gdpDeflator" }, // GDP deflator (inflation measure)
	{ indicator: "NY.GNP.MKTP.CD", key: "gnp" }, // Gross national product (current US$)
	{ indicator: "NE.CON.TOTL.CD", key: "consumption" }, // Household final consumption expenditure (current US$)
	{ indicator: "NE.GDI.TOTL.CD", key: "grossCapitalFormation" }, // Gross capital formation (current US$)
	{ indicator: "NE.TRD.GNFS.ZS", key: "tradePercentGDP" }, // Trade (% of GDP)
	{ indicator: "NE.EXP.GNFS.CD", key: "exports" }, // Exports of goods and services (current US$)
	{ indicator: "NE.EXP.GNFS.ZS", key: "exportsPercentGDP" }, // Exports (% of GDP)
	{ indicator: "NE.IMP.GNFS.CD", key: "imports" }, // Imports of goods and services (current US$)
	{ indicator: "NE.IMP.GNFS.ZS", key: "importsPercentGDP" }, // Imports (% of GDP)
	{ indicator: "NY.TAX.TOTL.GD.ZS", key: "taxRevenuePercentGDP" }, // Tax revenue (% of GDP)
	{ indicator: "GC.DOD.TOTL.GD.ZS", key: "debtPercentGDP" }, // Central government debt (% of GDP)
	{ indicator: "NY.ADJ.NNTY.CD", key: "netNationalIncome" }, // Net national income (current US$)
	{ indicator: "FP.CPI.TOTL", key: "cpi" }, // Consumer Price Index (inflation)
	{ indicator: "FR.INR.RINR", key: "interestRate" }, // Interest rate (%)

	// 2. Labor / Employment
	{ indicator: "SL.UEM.TOTL.ZS", key: "unemploymentRate" }, // Unemployment (%)
	{ indicator: "SL.AGR.EMPL.ZS", key: "agricultureEmploymentPercent" }, // Agriculture (% of employment)
	{ indicator: "SL.IND.EMPL.ZS", key: "industryEmploymentPercent" }, // Industry (% of employment)
	{ indicator: "SL.SRV.EMPL.ZS", key: "servicesEmploymentPercent" }, // Services (% of employment)

	// 3. Education / Human capital
	{ indicator: "SE.PRM.ENRR", key: "primaryEnrollmentRate" }, // Primary enrollment (%)

	// 4. Demographic / Health
	{ indicator: "SP.POP.TOTL", key: "population" }, // Total population
	{ indicator: "SP.DYN.LE00.IN", key: "lifeExpectancyRate" }, // Life expectancy at birth (years)
	{ indicator: "SP.DYN.CBRT.IN", key: "birthRate" }, // Crude birth rate (per 1,000 people)
	{ indicator: "SP.DYN.TFRT.IN", key: "fertilityRate" }, // Total fertility (children per woman)
	{ indicator: "SP.DYN.IMRT.IN", key: "infantMortalityRate" }, // Infant mortality (per 1,000 births)
	{ indicator: "SH.XPD.CHEX.GD.ZS", key: "healthSpendingPercentGDP" }, // Health expenditure (% of GDP)

	// 5. Environment / Resources
	{ indicator: "EG.USE.PCAP.KG.OE", key: "energyUsePerCapita" }, // Energy use per capita
	{ indicator: "EN.ATM.CO2E.PC", key: "co2EmissionsPerCapita" }, // CO2 emissions per capita
	{ indicator: "AG.LND.FRST.ZS", key: "forestAreaPercent" }, // Forest area (% of land)
]

export const europeanCountries = [
	"NO", // Norway
	"SE", // Sweden
	"FI", // Finland
	"DK", // Denmark
	"IE", // Ireland
	"GB", // United Kingdom
	"NL", // Netherlands
	"BE", // Belgium
	"LU", // Luxembourg
	"FR", // France
	"DE", // Germany
	"CH", // Switzerland
	"AT", // Austria
	"PL", // Poland
	"CZ", // Czech Republic
	"HU", // Hungary
	"RS", // Serbia
	"AL", // Albania
	"GR", // Greece
	"IT", // Italy
	"ES", // Spain
	"CY", // Cyprus
	"RO", // Romania
	"BG", // Bulgaria
	"RU", // Russia
	"TR", // Turkey
]

export const americanCountries = [
	"CA", // Canada
	"US", // United States
]

export const asianCountries = [
	// East Asia
	"CN", // China
	"JP", // Japan
	"KR", // South Korea

	// Southeast Asia
	"SG", // Singapore

	// South Asia
	"IN", // India

	// Western Asia / Middle East
	"GE", // Georgia
	"IL", // Israel
	"SA", // Saudi Arabia
	"AE", // United Arab Emirates
]

export const allCountries = [...europeanCountries, ...americanCountries, ...asianCountries]
