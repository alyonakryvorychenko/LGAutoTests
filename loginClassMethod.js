//using class and method;
let {webdriver, until, By, Builder} = require('selenium-webdriver');
let driver;
const TIMEOUT = 15000;

class LoginPage {

    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
        this.driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT});
        this.driver.manage().window().maximize();
    }

    navigateToTestUrl(testURL) {
        this.driver.get(testURL);
    }

    quitBrowser() {
        this.driver.quit();
    }

    //
    // waitElement(elSelector){
    //     driver.wait(until.elementLocated(elSelector),TIMEOUT);
    // }

    enterAccountName(txt) {
        this.driver.wait(until.elementLocated(By.id("tenant")), TIMEOUT).sendKeys(txt);
    }

    clickNextBtn() {
        this.driver.findElement(By.className("button next-btn")).click();
    }

    enterLoginValue(loginValue) {
        this.driver.wait(until.elementLocated(By.css('[type=email]')), TIMEOUT).sendKeys(loginValue);

    }

    enterPasswordValue(passwordValue) {
        this.driver.wait(until.elementLocated(By.css('[type=password]')), TIMEOUT).sendKeys(passwordValue);
    }

    clickLoginBtn() {
        this.driver.findElement(By.css('[class=auth0-label-submit]')).click()
    }
}

module.exports = new LoginPage()