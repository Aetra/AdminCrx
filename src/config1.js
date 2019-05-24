import config from 'react-global-configuration';

config.set({
    URLAPI: "https://www.cruxpool.com/api",
    URL:"https://www.cruxpool.com/",
    POOL: "/pool/stats",
    refreshInterval:2000,
    refreshIntervalUsers:60000,
    refreshIntervalFinance:30000,

    fakeAPI:'http://localhost:3000'
});
export default config;
