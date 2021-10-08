class BrowserUtils {

    /**
     *
     * @param {string} key
     * @returns {BrowserUtils}
     */
    keys(key) {
        browser.keys(key);

        return this;
    }

}
module.exports = new BrowserUtils();
