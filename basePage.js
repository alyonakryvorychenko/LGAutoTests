let {webdriver, until, By, Builder} = require('selenium-webdriver');
const TIMEOUT = 15000;

var Page = function () {
    this.driver = new Builder().forBrowser('chrome').build();
    let driver = this.driver;

    this.naviagetToURL = function (URL) {
        return driver.get(URL);
    }

    this.quitBrowser = function () {
        return driver.quit();
    }

    this.find = function (elLocator) {
        driver.wait(until.elementLocated(elLocator), TIMEOUT);
        return driver.findElement(elLocator);
    }
    this.write = function (el, txt) {
        return this.find(el).sendKeys(txt);
    }
}
module.exports = Page;