import Page from '../../search-city/pages/page';
import {element,keys} from "../wrapper";

class HomePage extends Page {

  /**
   *
   * @returns {HomePage}
   */
  open() {
    super.open('');
    return this;
  }

  /**
   *
   * @param {string} value
   * @returns {HomePage}
   */
  inputSearchCity(value) {
    element('[placeholder="Weather in your city"]').setValue(value);
    keys('Enter');
    return this;
  }

}

export default new HomePage();
