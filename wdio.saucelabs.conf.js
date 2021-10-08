const baseConfig = require('./wdio.conf').config;
const sauceConfig = Object.assign(baseConfig, {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  maxInstances: 1,
  region: 'eu',
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--start-maximized', '--no-sandbox'],
    },
    maxInstances: 3,
  },
  ],
  specs: ['tests/e2e/src/**/*.spec.js'],
  suites: {
    search_city: ['tests/e2e/src/search-city/specs/**/*.spec.js'],
  },
  services: [
    ['sauce', {
      sauceConnect: false,
      sauceConnectOpts: {
      },
    }],
  ],
});

exports.config = sauceConfig;
