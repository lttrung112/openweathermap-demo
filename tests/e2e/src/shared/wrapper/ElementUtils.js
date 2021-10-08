class ElementUtils {
  /**
     * The function used to get element on the page of the page by gives a locator.
     * In case does not get that will be throw a exception
     * @param {string} selector
     * @param {int} timeout
     * @param {boolean} isWaitForVisible
     * @return {Object}
     */
  element(
      selector,
      timeout = 30000,
      isWaitForVisible = true,
  ) {
    try {
      if (isWaitForVisible) {
        $(selector).waitForDisplayed(timeout);
      }
      return $(selector);
    } catch (ex) {
      throw new TypeError(ex);
    }
  }

  /**
     *
     * @param {string} selector
     * @return {boolean}
     */
  isDisplayed(selector) {
    return $(selector).isDisplayed();
  }
}
module.exports = new ElementUtils();
