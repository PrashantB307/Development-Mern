const puppeteer = require("puppeteer");

let email = "pb28.rkt@gmail.com";
let password = "Bhardwaj@307";
let cTab;

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    //chrome://version/
   // executablePath:"C:\Program Files\Google\Chrome\Application\chrome.exe"
});

browserOpenPromise.then(function(browser) {
    console.log("Browser is open");
    console.log(browser);
    //An array of all open paes inside the Browser
    let alltabsPromise = browser.pages();
    return alltabsPromise;
})
.then(function (allTabsArr) {
    cTab = allTabsArr[0];
    console.log("new tab");
    //URL to navigatye page to
    let visitLoginPage = cTab.goto("https://www.hackerrank.com/auth/login");
    return visitLoginPage;
})
.then(function () {
    console.log("HackerRank Login Page opened");
    let emailwillTypePromise = cTab.type("input[name = 'username']", email);
    return emailwillTypePromise;
})
.then(function () {
    console.log("Email is typed");
    let passwordwillTypePromise = cTab.type("input[type = 'password']", password);
    return passwordwillTypePromise;
})
.then(function () {
    console.log("Password is typed");
    let willLoggedPromise = cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return willLoggedPromise; 
})
.then(function () {
    console.log("Logged in to Hackerrank successfully");
    //--waitAndClick :=> It will wait for the entire webpage to load 
                        // and then click on the node.
    let algoOpenPromise = waitAndClick("div[data-automation ='algorithms']");
    return algoOpenPromise;
})
.then(function () {
    console.log ("Algorithm page is Opened");
})
.catch(function (err) {
    console.log(err);
});

function waitAndClick(algoBtn) {
    let myPromise = new Promise(function (resolve, reject) {
        let waiTfoPromise = cTab.waitForSelector(algoBtn);
        waiTfoPromise.then(function () {
            console.log("Algo btn is found");
            let clickPromise = cTab.click(algoBtn);
            return clickPromise;
        })
        .then(function () {
            console.log("Algo btn is clicked");
            resolve();
        })
        .catch(function (err) {
            console.log(err);
        })
    });

    return myPromise;
}
