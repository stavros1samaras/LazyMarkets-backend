export const indicators = [
  // economic
  { indicator: "NY.GDP.MKTP.CD", key: "gdp" }, // GDP (current US$)
  { indicator: "NY.GDP.PCAP.CD", key: "gdpPerCapita" }, // GDP per capita (current US$)
  { indicator: "NY.GDP.MKTP.KD.ZG", key: "gdpGrowthRate" }, // GDP growth (annual %)
  { indicator: "NY.GDP.PCAP.KD.ZG", key: "gdpPerCapitaGrowth" }, // GDP per capita growth (annual %)
  { indicator: "NY.GNP.MKTP.CD", key: "gnp" }, // Gross national product (current US$)
  { indicator: "NE.CON.TOTL.CD", key: "consumption" }, // Household final consumption expenditure (current US$)
  { indicator: "NE.EXP.GNFS.CD", key: "exports" }, // Exports of goods and services (current US$)
  { indicator: "NE.IMP.GNFS.CD", key: "imports" }, // Imports of goods and services (current US$)
  { indicator: "NE.GDI.TOTL.CD", key: "grossCapitalFormation" }, // Gross capital formation (current US$)
  { indicator: "NE.TRD.GNFS.ZS", key: "tradePercentGDP" }, // Trade (% of GDP)
  { indicator: "NY.TAX.TOTL.GD.ZS", key: "taxRevenuePercentGDP" }, // Tax revenue (% of GDP)
  { indicator: "GC.DOD.TOTL.GD.ZS", key: "debtPercentGDP" }, // Central government debt (% of GDP)
  { indicator: "NY.ADJ.NNTY.CD", key: "netNationalIncome" }, // Net national income (current US$)

  // demographic
  { indicator: "SP.POP.TOTL", key: "population" }, // Total population
  { indicator: "SP.DYN.LE00.IN", key: "lifeExpectancyRate" }, // Life expectancy at birth (years)
  { indicator: "SP.DYN.CBRT.IN", key: "birthRate" }, // Crude birth rate (per 1,000 people)
];
