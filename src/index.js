export default {
    // Multiple browsers support
    isMultiBrowser: true,

    // reference to selenium instance
    driver: null,

    // map with open page references
    openedPages: {},

    // Required - must be implemented
    // Browser control
    async openBrowser (pageUrl/*id, pageUrl, browserName */) {
        //throw new Error('Not implemented!');

        var webdriver = require('selenium-webdriver');

        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .usingServer(pageUrl)
            .build();
        
        //this.openedPages[id] = driver;
    },

    async closeBrowser (/*id*/) {
        //throw new Error('Not implemented!');

        this.driver.quit();
    },


    // Optional - implement methods you need, remove other methods
    // Initialization
    async init () {
        return;
    },

    async dispose () {
        return;
    },

    
    // Browser names handling
    async getBrowserList () {
        throw new Error('Not implemented!');
    },

    async isValidBrowserName (/* browserName */) {
        return true;
    },
    

    // Extra methods
    async resizeWindow (/* id, width, height, currentWidth, currentHeight */) {
        this.reportWarning('The window resize functionality is not supported by the "testcafe-browser-selenium-provider" browser provider.');
    },

    async takeScreenshot (/* id, screenshotPath, pageWidth, pageHeight */) {
        this.reportWarning('The screenshot functionality is not supported by the "testcafe-browser-selenium-provider" browser provider.');
    }
};
