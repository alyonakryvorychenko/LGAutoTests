const {Builder, By, Key, until} = require('selenium-webdriver');

async function main() {

    (async function example() {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('https://app.stg.lawgeex.com/dashboard/#/login/login-form');
            let currentPageUrl = await driver.getCurrentUrl();
            console.log("CurentURL: " + currentPageUrl);
            //need to write function for check if teh use is authorized on not
            if (currentPageUrl.includes('login/login-form')){
              console.log ("the user on log in page");
            }else{
                console.log ("the user is authorized");
            }
        } finally {
            await driver.quit();
        }
    })();

}
main();
