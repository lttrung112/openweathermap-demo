'use strict';

const merge = require('deepmerge');
const mainConfig = require('../../../wdio.conf.js');
exports.config = merge(mainConfig.config, {
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--start-maximized', '--no-sandbox','headless'],
        },
        maxInstances: 3,
    },
    ],
    specs: ['tests/rest-api/src/**/*.spec.js'],
    suites: {
        search_city: ['tests/rest-api/**/*.spec.js'],
    }
});
