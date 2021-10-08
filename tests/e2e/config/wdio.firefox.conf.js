'use strict';

const merge = require('deepmerge');
const mainConfig = require('../../../wdio.conf.js');
exports.config = merge(mainConfig.config, {
    capabilities: [{
                maxInstances: 3,
                browserName: 'firefox',
                'moz:firefoxOptions':{
                    args: ['--disable-infobars','profile.default_content_setting_values.geolocation=1'],
                }
    },
    ],
    specs: ['tests/e2e/src/**/*.spec.js'],
    suites: {
        search_city: ['tests/e2e/src/search-city/specs/**/*.spec.js'],
    }
});
