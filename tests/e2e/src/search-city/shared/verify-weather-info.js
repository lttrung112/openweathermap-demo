import findPage from '../pages/city.page';
import utilities from '../../../../../support/utils/Utilities';

export default (city) => {
  verifyDateTime(city.geo);
  verifyCityName(city.cityName);
  verifyTemperatureValueFormat();
  verifySkySituationDisplayed();
  verifyHumidityValueFormat();
  verifyVisibilityValueFormat();
};

export const verifyDateTime = (geo) =>{
  const currentDateTime = findPage.getDateTime();
  const expectedDateTime = utilities.getDateTimeFromGeo(geo);
  chai.expect(currentDateTime).to.be.eql(expectedDateTime, 'FAILED: datetime is not correct!');
};

export const verifyCityName = (name) =>{
  chai.expect(findPage.getCityName()).to.be.eql(name, 'FAILED: city name is not correct!');
};

export const verifyTemperatureValueFormat = () =>{
  const temperature = findPage.getTemperature();
  chai.expect(utilities.isTemperatureFormat(temperature)).to.equal(true, 'FAILED: the Temperature format is not correct!');
};

export const verifySkySituationDisplayed = () =>{
  findPage.isSkySituationDisplayed();
  chai.expect(findPage.isSkySituationDisplayed()).to.equal(true);
};

export const verifyHumidityValueFormat = () =>{
  const humidityValue = findPage.getHumidityValue();
  chai.expect(utilities.isHumidityFormat(humidityValue)).to.equal(true, 'FAILED: the Humidity format is not correct!');
};

export const verifyVisibilityValueFormat = () =>{
  const visibilityValue = findPage.getVisibilityValue();
  chai.expect(utilities.isVisibilityFormat(visibilityValue)).to.equal(true, 'FAILED: the Visibility format is not correct!');
};
