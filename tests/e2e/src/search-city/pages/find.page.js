import Page from './page';
import {element} from "../../shared/wrapper";

class FindPage extends Page {

  /**
   *
   * @returns {FindPage}
   */
  open() {
    super.open('find');
    return this;
  }

  clickOnSearchResultsCityLink(cityName){
    const SEARCH_RESULTS_CITY_LINK = '//div[@id="forecast_list_ul"]//a[contains(text(),"%s")]'
    element(sprintf(SEARCH_RESULTS_CITY_LINK, cityName)).click();
    return this;
  }

}

export default new FindPage();
