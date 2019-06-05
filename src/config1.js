import config from 'react-global-configuration';

config.set({
    URLAPI: "https://www.cruxpool.com/api",
    URL:"https://www.cruxpool.com/",
    URLAPIGRAPH:"http://localhost:8080/ETH/history",
    URLAPIMOUNTH:"http://localhost:8080/ETH/history/mounth/1559563778",
    POOL: "/pool/stats",
    refreshInterval:2000,
    refreshIntervalGraph:30000,
    refreshIntervalUsers:60000,
    refreshIntervalFinance:30000,
    refreshIntervalDiag:10000000,

    fakeAPI:'http://localhost:3000'
});
export default config;
