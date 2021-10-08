export default class City {
  set cityName(value) {
    this._cityName = value;
  }

  get cityName() {
    return this._cityName;
  }

  set geo(value) {
    this._geo = value;
  }

  get geo() {
    return this._geo;
  }
}
