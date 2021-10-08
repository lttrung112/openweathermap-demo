class BrowserUtils {
  /**
     *
     * @param {string} key
     * @return {BrowserUtils}
     */
  keys(key) {
    browser.keys(key);

    return this;
  }
}
module.exports = new BrowserUtils();
