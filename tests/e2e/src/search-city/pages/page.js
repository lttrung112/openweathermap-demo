export default class Page {
  open(path) {
    browser.url(path);
  }

  verifyLogoDisplayed() {
    const isLogoDisabled = $('//img[@src="/themes/openweathermap/assets/img/logo_white_cropped.png"]').isDisplayed();
    chai.expect(isLogoDisabled).to.be.eql(true);
  }
}
