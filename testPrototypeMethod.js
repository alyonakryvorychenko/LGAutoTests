var Page = require('./basePage.js');
let {until, By} = require('selenium-webdriver');
var page;
const tenant = "alona-qa";
const environment = "http://app.stg.lawgeex.com";
const userName = "alona@lawgeex.com";
const userPassword = "qwe123!@#";

describe("Test Suite of object", function() {
    this.timeout(60000);


    before(async function () {
        page = new Page();
        await page.driver.manage().window().maximize();
        await page.navigateToURL(environment);
        //console.log('opened URL');
    });

    it("Test 1 - Log in", async function () {
        await page.enterAccountName(tenant);
        await page.clickNextBtn();
        await page.enterLogin(userName);
        await page.enterPassword(userPassword);
        await page.clickLoginBtn();
        await page.checkDashboard();
    });

    after(async function () {
        await page.driver.quit();
    });
});