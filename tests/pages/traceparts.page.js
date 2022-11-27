const NativePage = require('./native.page.js');
const tracepartsHomePageData = require('../files/testData/traceparts.data.js');
const assert = require('assert');

class sampleHomePage extends NativePage {

  get tracepartPageElement() {
    return this.getPage('traceparts.locators');
  }

  openTracepartsHomepage() {
    browser.url(tracepartsHomePageData['url']);
  }

  enterTextinSearch(searchkey) {

    browser.pause(3000);
    const cookie = $(this.tracepartPageElement.cookie)
    cookie.click()
    browser.pause(1000);
    const searchField = $(this.tracepartPageElement.searchField)
    searchField.click()
    searchField.setValue(searchkey)
    const clicksearch = $(this.tracepartPageElement.search)
    clicksearch.click()

    browser.pause(3000)


  }

  selectProduct(){
    const getStartedLink = $(this.tracepartPageElement.getStartedLink)
    getStartedLink.click()

  }

  verifyProductDescription(actualtext){

    const title = $(this.tracepartPageElement.title);
    const header = title.getText();
    console.log(header);
    assert.equal(header, tracepartsHomePageData['title'])

    const model = $(this.tracepartPageElement.model)
      model.waitForDisplayed();
      const text = model.getText();
      console.log(text);
      assert.equal(text, actualtext)
      browser.pause(7000)
  }



  selectLeftOtion() {
    

    $('//*[@id="overview-slider-preview"]/div').click({ button: 'right' });
    browser.pause(3000)

    const view = $(this.tracepartPageElement.views)
    view.click();
    browser.pause(3000)

    const leftview = $(this.tracepartPageElement.left)
    leftview.click();
    browser.pause(6000)

  }

  
}

module.exports = sampleHomePage;
