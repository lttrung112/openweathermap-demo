'use strict';

const merge = require('deepmerge');
const mainConfig = require('../../../wdio.conf.js');
exports.config = merge(mainConfig.config, {
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
    }
});
