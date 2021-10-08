import Page from './page';

import {element,isDisplayed} from "../../shared/wrapper";


class CityPage extends Page {

  /**
   *
   * @returns {CityPage}
   */
  open(cityId) {
    super.open(`city/${cityId}`);
    return this;
  }

  /**
   *
   * @returns {string}
   */
  getDateTime() {
    const CURRENT_TIME_TEXT = '//span[@class="orange-text"]';
    return element(CURRENT_TIME_TEXT).getText();

  }

  /**
   *
   * @returns {string}
   */
  getCityName() {
    const CURRENT_CITY_NAME_TEXT = '//div[@class="current-container mobile-padding"]//h2';
    return element(CURRENT_CITY_NAME_TEXT).getText();

  }

  /**
   *
   * @returns {string}
   */
  getTemperature(){
    const CURRENT_TEMPERATURE_TEXT = '//*[@class="heading"]'
    return element(CURRENT_TEMPERATURE_TEXT).getText();

  }

  /**
   *
   * @returns {boolean}
   */
  isSkySituationDisplayed(){
    const SKY_SITUATION_TEXT = '//div[contains(text(),"Feels like")]';
    return isDisplayed(SKY_SITUATION_TEXT);

  }

  /**
   *
   * @returns {string}
   */
  getHumidityValue() {
    const HUMIDITY_TEXT = '//span[text()="Humidity:"]/..';
    let value = element(HUMIDITY_TEXT).getText()
    value = value.split('\n')[1];
    return value;

  }

  /**
   *
   * @returns {string}
   */
  getVisibilityValue() {
    const VISIBILITY_TEXT = '//span[text()="Visibility:"]/..'
    let value = element(VISIBILITY_TEXT).getText()
    value = value.split('\n')[1];
    return value;
  }

}

export default new CityPage();
