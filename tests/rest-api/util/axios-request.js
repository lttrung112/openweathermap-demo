// const axios = require('axios').default;
const axios = require('axios');

/**
 *
 * @param {Object} request
 * @returns {*}
 */
export const sendRequest = (request) => {
    return browser.call(function () {
        return axios(request)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                if (e.response) {
                    return e.response;
                }
                return e;
            });
    });
};

module.exports = sendRequest;
