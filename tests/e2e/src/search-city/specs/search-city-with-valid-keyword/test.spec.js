import homepage from '../../../shared/pages/home.page';
import findPage from '../../pages/find.page';
import verifyCityInfo from '../../shared/verify-weather-info';
import city from './test.data';

describe('Search city', function() {
  before('Open home page', function() {
    homepage.open();
  });

  it('Search city with valid keyword should display correct result', function() {
    homepage.inputSearchCity(city.cityName);
    findPage.clickOnSearchResultsCityLink(city.cityName);
    verifyCityInfo(city);
  });
});

