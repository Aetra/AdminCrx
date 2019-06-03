import config from 'react-global-configuration';

config.set({
    URLAPI: "https://www.cruxpool.com/api",
    URL:"https://www.cruxpool.com/",
    POOL: "/pool/stats",
    refreshInterval:2000,
    refreshIntervalGraph:30000,
    refreshIntervalUsers:60000,
    refreshIntervalFinance:30000,
    refreshIntervalDiag:10000000,
    fakeAPI:'http://localhost:3000'
});
export default config;
