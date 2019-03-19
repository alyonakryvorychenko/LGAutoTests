let {webdriver, until, By, Builder} = require('selenium-webdriver');
const TIMEOUT = 15000;

var Page = function () {
    this.driver = new Builder().forBrowser('chrome').build();
    let driver = this.driver;

    this.navigateToURL = function (URL) {
        return driver.get(URL);
    };

    this.quitBrowser = function () {
        return driver.quit();
    };

    //
    // this.write = function (el, txt) {
    //     return this.find(el).sendKeys(txt);
    // };

    this.enterAccountName = function(accountName) {
        console.log('enter account name');
        driver.wait(until.elementLocated(By.id("tenant")), TIMEOUT);
        return driver.findElement(By.id("tenant")).sendKeys(accountName);
    };

    this.clickNextBtn = function() {
        console.log('click next button');
        driver.wait(until.elementLocated(By.className("button next-btn")), TIMEOUT);
        return driver.findElement(By.className("button next-btn")).click();
    };

    this.enterLogin = function(login) {
        console.log("enter login");
        driver.wait(until.elementLocated(By.css('[type=email]')), TIMEOUT).then(element =>{
            driver.wait(until.elementIsVisible(element), TIMEOUT).then(loginField =>{
                return loginField.sendKeys(login);
            });
        });


        // var 1
        // const element = By.css("[type=email]");
        // driver.wait(until.elementLocated(element));
        // const whatElement = driver.findElement(element);
        // driver.wait(until.elementIsVisible(whatElement), TIMEOUT).sendKeys(login);

        // var 2
        // let el = await driver.findElement(By.css("[type=email]"));
        // await driver.wait(until.elementIsVisible(el), TIMEOUT);
        // await el.sendKeys(login);
    };

    this.enterPassword = function(password) {
        console.log("enter password");
        driver.wait(until.elementLocated(By.css('[type=password]')), TIMEOUT).then(element =>{
            return driver.wait(until.elementIsVisible(element), TIMEOUT).then(passwordField =>{
                passwordField.sendKeys(password);
            });
        });
    };

    this.clickLoginBtn = function() {
        console.log("click log in button");
        driver.wait(until.elementLocated(By.css("[class=auth0-label-submit]")), TIMEOUT).then(element =>{
            return driver.wait(until.elementIsVisible(element), TIMEOUT).then(loginBtn =>{
                loginBtn.click();
            })
        });
    };

    this.checkDashboard = function () {
        console.log("Check that Dashboard page is opened");
        driver.wait(until.elementLocated(By.className("dashboard-title")),TIMEOUT).then(element =>{
            return driver.wait(until.elementIsVisible(element), TIMEOUT).then(getTitleValue =>{
                getTitleValue.getText().then(dashboardTitle =>{
                    assert(dashboardTitle === "My Contracts", "Dashboard title: " + dashboardTitle + "doesn't match expected");
                });
            });
        });

    }

};
module.exports = Page;