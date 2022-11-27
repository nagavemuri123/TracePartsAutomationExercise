class homeLocators {
  constructor() {
    this.searchField = '//*[@id="searchBox"]';
    this.getStartedLink = '//*[@id="search-results-items"]/div[1]/a/div[2]/div/h5';
    this.cookie = '//*[@id="didomi-notice-agree-button"]';
    this.search = '//*[@id="search-button"]/i';
    this.model = '//*[@id="bomfields-listing"]/table/tbody/tr[4]/td';
    this.rightclick = '//*[@id="overview-slider-preview"]/div';
    this.views = '//*[@id="overview-slider-preview"]/div/div[1]/ul/li[1]/button/span';
    this.left = '//*[@id="overview-slider-preview"]/div/div[1]/ul/li[1]/ul/li[3]';
    this.title = '//*[@id="overview"]/h1';
  }
}

module.exports = homeLocators;
