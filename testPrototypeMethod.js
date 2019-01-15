var Page = require('./basePage.js');
let {until, By} = require('selenium-webdriver');
var page;
const tenant = "alona-qa";
const environment = "http://app.stg.lawgeex.com";
const userName = "alona@lawgeex.com";
const userPassword = "qwe123!@#";
const accountName = "alona-qa";
const TIMEOUT = 10000;


describe("Test Suite of object", function() {
    this.timeout(60000);


    before(function () {
        page = new Page();
        page.driver.manage().window().maximize();
        page.naviagetToURL(environment);
        //console.log('opened URL');
    });

    it("Test", async function () {

        console.log('enter account name');

        console.log('click next btn');

        console.log('enter login value');

        console.log('enter password');

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

    it("Test 2 - Log in", async function () {
        await page.driver.wait(until.elementLocated(By.id("tenant")),TIMEOUT).sendKeys("alona-qa");
        await page.driver.findElement(By.className("button next-btn")).click();
        let passwordElement = await page.driver.wait(until.elementLocated(By.css('[type=password]')), TIMEOUT);
        console.log("waited and found password element");
        await passwordElement.sendKeys(userPassword);
        console.log("enter password");
        await page.driver.findElement(By.css('[type=email]')).sendKeys(userName);
        console.log("enter email");
        await page.driver.findElement(By.css('[class=auth0-label-submit]')).click();
        console.log("the user is log in");
        await page.driver.findElement(By.className("dashboard-title")).getText().then(function(dashboardTitle){
            assert(dashboardTitle === "My Contracts", "Dashboard title: " + dashboardTitle + "doesn't match expected");
        });
    });
    after(async function () {
        await page.driver.quit();
    });
})