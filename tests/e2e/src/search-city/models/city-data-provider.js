import City from './city';

export default class CityDataProvider {

    /**
     * This function is used in case of you want to use a default data set
     * @returns {City}
     */
    static generateCityInfo() {
        const city = new City();
        city.cityName = 'Ha Noi';
        city.geo = [21.0245, 105.8412];

        return city;
    }
}
