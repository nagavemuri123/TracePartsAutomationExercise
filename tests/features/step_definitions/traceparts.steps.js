const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/traceparts.page.js');
const home = new homePage();


Given(/^I am on the Traceparts homepage$/, () => {
    home.openTracepartsHomepage();
});

When(/^user search for keyword (.*)$/, (searchkey) => {
    home.enterTextinSearch(searchkey);
});

When(/^user selects product from product listing page$/, () => {
    home.selectProduct();
});

When(/^user verify product description as (.*) from product details page$/, (actualtext) => {
    home.verifyProductDescription(actualtext)
});


Then(/^user select left option from 3D model product image$/, () => {
    home.selectLeftOtion();
});