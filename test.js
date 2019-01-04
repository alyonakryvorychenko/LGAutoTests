const {webdriver, until, By, Builder} = require('selenium-webdriver');
assert = require('assert');
const tenant = "alona-qa";
var userName = "alona@lawgeex.com";
var userPassword = "qwe123!@#";
const environment = "http://app.stg.lawgeex.com";

let driver;
const TIMEOUT = 10000;

 describe("Test Suite", function() {
     this.timeout(60000);


     before(async function () {
         driver = await new Builder().forBrowser('chrome').build();
         await driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT});
         await driver.manage().window().maximize();
         await driver.get(environment);
     });

    //  beforeEach(async function() {
    //      await driver.get(environment);
    //      let currentPageUrl = await driver.getCurrentUrl();
    //      console.log("CurentURL: " + currentPageUrl);
    //      //need to write function for check if teh use is authorized on not
    //       if (currentPageUrl.includes('login/login-form')){
    //      console.log ("the user on log in page");
    //      }else{
    //      console.log ("the user is authorized");
    //      //click the logout button
    //      await driver.findElement(By.xpath("/html/body/lg-app/lg-dashboard/header/div/div/div[1]/a[2]")).click();
    //  }
    // })

     it("Test 1 - Log in to the site ith correct credentials", async function () {
         await driver.wait(until.elementLocated(By.id("tenant")),5000).sendKeys("alona-qa");
         await driver.findElement(By.className("button next-btn")).click();
         let passwordElement = await driver.wait(until.elementLocated(By.css('[type=password]')), 5000);
         console.log("waited and found password element");
         await passwordElement.sendKeys(userPassword);
         console.log("enter password");
         await driver.findElement(By.css('[type=email]')).sendKeys(userName);
         console.log("enter email");
         await driver.findElement(By.css('[class=auth0-label-submit]')).click();
         console.log("the user is log in");
         await driver.findElement(By.className("dashboard-title")).getText().then(function(dashboardTitle){
             assert(dashboardTitle === "My Contracts", "Dashboard title: " + dashboardTitle + "doesn't match expected");
         });
     });

     // it("Test 2 - Log in.Incorrect tenant or credentials", async function () {
     //
     //     let currentPageUrl = await driver.getCurrentUrl();
     //     console.log("CurentURL: " + currentPageUrl);
     //     //need to write function for check if teh use is authorized on not
     //     if (currentPageUrl.includes('login/login-form')){
     //         console.log ("the user on log in page");
     //     }else{
     //         console.log ("the user is authorized");
     //         //click the logout button
     //         await driver.findElement(By.xpath("/html/body/lg-app/lg-dashboard/header/div/div/div[1]/a[2]")).click();
     //     }

         //Go with empty tenant
         // await driver.wait(until.elementLocated(By.id("tenant")),5000).sendKeys("");
         // await driver.wait(until.elementLocated(By.className("button next-btn")),5000).click();
         // let wrongTenantError = await driver.wait(until.elementLocated(By.className("error-msg")), 5000).getText();
         // console.log("error text:" + wrongTenantError);
         // await driver.findElement(By.xpath('//label[@for="tenant"]')).getText().then(function(checkTitleEnterAccountPage){
         //     assert (checkTitleEnterAccountPage === "Account ID", "It isn't 'Enter you account page'");
         // });
         //    assert(wrongTenantError === "This is a required field.", "Error of empty tenant isn't corresponded to requirement and equal to" + wrongTenantError);

     //   //Go with not existing account name - only one case is run. I don't understand why it happens
     //     await driver.findElement(By.id("tenant")).sendKeys("test test test test test");
     //     await driver.findElement(By.className("button next-btn")).click();
     //     let wrongTenantName = await driver.wait(until.elementLocated(By.className("error-msg")), 5000).getText();
     //     console.log("error text:" + wrongTenantName);
     //     await driver.findElement(By.xpath('//label[@for="tenant"]')).getText().then(function(checkTitleEnterAccountPage){
     //         assert (checkTitleEnterAccountPage === "Account ID", "It isn't 'Enter you account page'");
     //     });
     //     assert(wrongTenantName === "Wrong account ID.", "Error of empty tenant isn't corresponded to requirement and equal to" + wrongTenantName);
     // });
     //

     // it("Test 3 - Upload Incoming contract", async function () {
     //     await driver.findElement(By.className('mat-button-wrapper')).click();
     //     await driver.findElement(By.xpath("//button[@class='mat-menu-item'][1]")).click();
     //     let uploadContract = await driver.findElement(By.css("span.pc-file-browse"));
     //     // use action to upload the contract
     //     const actions = driver.actions({bridge: true});
     //     await actions.click(uploadContract).sendKeys('file/Incoming contrcat.docx').perform();
     //     driver.timeout(5000);
     //     //await driver.findElement(By.css("span.pc-file-browse")).sendKeys("file/Incoming contrcat.docx");
     //
     //
     // });

         it ("Test 4 - Create new playbook", async function() {
             //test for playbook
             await driver.findElement(By.css("div.dashboard__nav li.ng-star-inserted")).click();
             await driver.wait(until.elementTextContains(driver.findElement(By.className("dashboard-title")), "Policy Center"),5000);
             console.log("waite Policy Center page");
             await driver.wait(until.elementLocated(By.css("#mat-tab-label-0-1")), 5000);
             await driver.findElement(By.css("#mat-tab-label-0-1")).click();
             console.log("Click the Playbook tab");
             await driver.wait(until.elementLocated(By.id("createNewPBButton")),5000).click();
             console.log ("test 77888");
             await driver.wait(until.elementLocated(By.id("playbookName")), 5000).sendKeys("New playbook - auto test");
             console.log ("test 3654");
             await driver.findElement(By.id("savePlaybookName")).click();
             console.log ("test 0120");
             await driver.findElement(By.id("contractTypeID")).getText();


         });

     after(async function () {
         await driver.quit();
         console.log("close the browser");
     });
 });