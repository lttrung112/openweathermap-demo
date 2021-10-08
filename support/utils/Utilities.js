const fs = require('fs');
const moment = require('moment');

class Utilities {
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static takeScreenshot(name, failure=false) {
    if (!name) name = moment().format('YYYY-MM-DDTH:mm:ss');
    const path = './report/screenshot/';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    if (failure) {
      name = name + '_fail';
    }
    name = name.replace(/ /g, '_') + '.png';
    browser.saveScreenshot( path + name);
    const data = fs.readFileSync(`${path}/${name}`);
    allure.addAttachment(name, data, 'image/png');
  }

  /**
   *
   * @param {array} geo
   * @return {string}
   */
  static getDateTimeFromGeo(geo) {
    const geoTz = require('geo-tz');
    const tz = geoTz(geo[0], geo[1]);
    const options = {
      timeZone: tz,
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: 'numeric',
      // formatMatcher: "best fit"
    };
    const formatter = new Intl.DateTimeFormat([], options);
    return formatter.format(new Date()).replace(" AM", "am").replace(" PM", "pm");
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  static isHumidityFormat(value) {
    console.log('value', value);
    return /^\d+(\.\d+)?%$/.test(value);
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  static isVisibilityFormat(value) {
    return /^\d+(\.\d+)?km$/.test(value);
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  static isTemperatureFormat(value) {
    return /^\d+?°C$/.test(value);
  }
}

module.exports = Utilities;
