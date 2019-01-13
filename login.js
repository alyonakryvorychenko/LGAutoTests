//using class and method;

const {webdriver, until, By, Builder} = require('selenium-webdriver');
let driver;
const TIMEOUT = 15000;

class LoginPage {

    constructor(){
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT});
        driver.manage().window().maximize();
    }

    navigateToTestUrl(testURL){
        driver.get(testURL);
    }

    quitBrowser(){
        driver.quit();
    }

    waitElement(elSelector){
        driver.wait(until.elementLocated(elSelector),TIMEOUT);
    }

    enterAccountName(txt){
        driver.wait(until.elementLocated(By.id("tenant")),TIMEOUT).sendKeys(txt);
    }

    clickNextBtn(){
        driver.findElement(By.className("button next-btn")).click();
    }
}

module.exports = new LoginPage()