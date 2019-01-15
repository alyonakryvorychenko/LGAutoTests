By = require('selenium-webdriver');
const tenant = "alona-qa";
const environment = "http://app.stg.lawgeex.com";
const userName = "alona@lawgeex.com";
const userPassword = "qwe123!@#";
const accountName = "alona-qa";

describe("Test Suite of object", function() {
    this.timeout(60000);
    let loginPage = require('./loginClassMethod');

    before(function () {
        loginPage.navigateToTestUrl(environment);
        console.log('opened URL');
    });

    it("Test 8", async function () {
        await loginPage.enterAccountName(accountName);
        console.log('enter account name');
        await loginPage.clickNextBtn();
        console.log('click next btn');
        await loginPage.enterLoginValue(userName);
        console.log('enter login value');
        await loginPage.enterPasswordValue(userPassword);
        console.log('enter password');
        await loginPage.clickLoginBtn();
        console.log('click login btn');
        // await driver.wait(until.elementLocated(By.id("tenant")),TIMEOUT).sendKeys("alona-qa");
        // await driver.findElement(By.className("button next-btn")).click();
        // let passwordElement = await driver.wait(until.elementLocated(By.css('[type=password]')), TIMEOUT);
        // console.log("waited and found password element");
        // await passwordElement.sendKeys(userPassword);
        // console.log("enter password");
        // await driver.findElement(By.css('[type=email]')).sendKeys(userName);
        // console.log("enter email");
        // await driver.findElement(By.css('[class=auth0-label-submit]')).click();
        // console.log("the user is log in");
        // await driver.findElement(By.className("dashboard-title")).getText().then(function(dashboardTitle){
        //     assert(dashboardTitle === "My Contracts", "Dashboard title: " + dashboardTitle + "doesn't match expected");
        // });
    });
    after(async function () {
        await loginPage.quitBrowser();
    });
})