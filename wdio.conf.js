const utilities= require("./support/utils/Utilities");
const chai = require('chai');
const allure = require('@wdio/allure-reporter').default;
require('dotenv').config();
global.expect = chai.expect;
global.assert = chai.assert;
global.sprintf = require('sprintf-js').sprintf;
global.API_KEY = process.env.API_KEY || '{your_api_key}';
// Max time for single test case execution
const mochaTimeout = process.env.DEBUG ? 99999999 : 120000;
const elementTimeout = 10000;
const baseURL = process.env.BASE_URL || 'https://openweathermap.org';


exports.config = {
    baseUrl: baseURL,
    maxInstances: 10,
    logLevel: process.env.DEBUG ? 'info' : 'warn',
    bail: 0,
    waitforTimeout: elementTimeout,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        // 'chromedriver',
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: {
                drivers: {
                    chrome: { version: '94.0.4606.61' },
                    firefox: { version: '0.30.0' }
                }
            },
            args: {
                drivers: {
                    chrome: { version: '94.0.4606.61' },
                    firefox: { version: '0.30.0' }
                }
            },
        }]
    ],
    runner: 'local',
    // hostname: 'localhost',
    // port: 4444,
    // path: '/wd/hub',
    framework: 'mocha',
    specFileRetries: 1,
    // specFileRetriesDeferred: false,
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: [
      'spec',
      ['allure', {
        outputDir: 'report/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      }],
      ['junit', {
        outputDir: 'report/junit',
        outputFileFormat: function(options) { // optional
          return `test-${options.cid}-results.xml`
        }
      }],
        ['json',{
            outputDir: './report/json'
        }]
    ],
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: mochaTimeout,
        require: []
    },

    before: function (capabilities, specs) {
        global.allure = allure;
        global.chai = chai;
        global.utilities = utilities;
    },

    beforeSuite: function (suite) {
        allure.addFeature(suite.name);
    },

    beforeTest: function (test, context) {
        allure.addEnvironment("BROWSER", browser.capabilities.browserName);
        allure.addEnvironment("BROWSER_VERSION", browser.capabilities.version);
        allure.addEnvironment("PLATFORM", browser.capabilities.platform);

    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error !== undefined) {
            try {
                utilities.takeScreenshot(test.title, true)
            } catch {
                console.log('>> Capture Screenshot Failed!');
            }
        }
    },

    onComplete: function(exitCode, config, capabilities, results) {
        const mergeResults = require('wdio-json-reporter/mergeResults');
        mergeResults('./report/json', 'wdio-*', 'testResults.json')
    },
}
