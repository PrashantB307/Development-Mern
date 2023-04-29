const puppeteer = require("puppeteer");

let email = "xikibid862@robhung.com";
let password = "pepcoding123";
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
    console.log("Logged in to Hackerrank successfull");
})
.catch(function (err) {
    console.log(err);
});
