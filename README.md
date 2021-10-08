Openweather Map testing
====================
## Part-1. Test strategy - Test design - Bugs report:

- [Feature "Search weather in your city"](https://github.com/lttrung112/openweathermap/tree/test/test-design-bug-challenge)


## Part-2. WEB UI and API tests with WebdriverIO v7 and Mocha:


## Features
- WebdriverIO v7
- BDD with Mocha  
- Page Object model
- Allure Report
- Screenshot capture for failing tests
- ESLint
- MacOS support for Chrome and Firefox browser
- Rest API automation
- CI integration [CircleCI](https://app.circleci.com/pipelines/github/lttrung112/openweathermap) (under construction)
## How to Start

**Download or clone the project**

**Install**

- Install the JDK 1.8+
- Install the NodeJS (version is equal or greater than v12.16.1)
- Create your own configurations. Rename the `sample.env` to `.env` and change required variables.
- Open Terminal and `cd` to `openweathermap` repository.
- Run the command `npm install` to install dependencies packages

**Run UI Tests**

- For Chrome browser

```npm test ./tests/e2e/config/wdio.chrome.conf.js```

- For Firefox browser

```npm test ./tests/e2e/config/wdio.firefox.conf.js```

**Run API Tests**

(Get Key form https://home.openweathermap.org/api_keys and add value to API_KEY in `.env` file)

```npm test ./tests/rest-api/config/wdio.rest.conf.js```


**Allure Report**
(you must have installed [allure command line](https://docs.qameta.io/allure/#_get_started))

```npm run report```


## Tips

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, 
allowing you to run without your tests timing out. 

`DEBUG=true npm test`
### Clean up your test results before execution

`npm run clean`

### Check code format use ESLint

`npm run lint`