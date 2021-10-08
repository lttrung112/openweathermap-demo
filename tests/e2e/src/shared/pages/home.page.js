import Page from '../../search-city/pages/page';
import { element, keys } from "../wrapper";

class HomePage extends Page {
  /**
   *
   * @return {HomePage}
   */
  open() {
    super.open('');
    return this;
  }

  /**
   *
   * @param {string} value
   * @return {HomePage}
   */
  inputSearchCity(value) {
    element('[placeholder="Weather in your city"]').setValue(value);
    keys('Enter');
    return this;
  }
}

export default new HomePage();
