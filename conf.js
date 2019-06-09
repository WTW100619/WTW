"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
   allScriptsTimeout: 150000,
   framework: 'jasmine',
   params: {
       customerIDs: '',
   },
   capabilities: {
       browserName: 'chrome',
       chromeOptions: {
           useAutomationExtension: false,
           args: [
               '--disable-infobars',
               '--disable-gpu',
               '--start-maximized',
               '--disable-dev-shm-usage',
               '--no-sandbox',
               '--disable-extensions',
           ],
       },
   },
   beforeEach: function () {
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
   },
   jasmineNodeOpts: {
       showColors: true,
       defaultTimeoutInterval: 150000,
       isVerbose: true,
       print: function () { },
   },
   maxSessions: 1,
   // You could set no globals to true to avoid jQuery '$' and protractor '$'
   // collisions on the global namespace.
   noGlobals: false,
   onPrepare: function () {
       protractor_1.browser.ignoreSynchronization = true;
       jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'target',
           docTitle: 'Test Results  :' +
               new Date()
                   .toLocaleString('de-AT', { timeZone: 'Europe/Vienna' })
                   .toString()
                   .substring(0, 16),
           clientDefaults: {
               columnSettings: {
                   displayTime: true,
                   displayBrowser: false,
                   displaySessionId: false,
                   inlineScreenshots: false,
               },
           },
       }).getJasmine2Reporter());
   },
   specs: ['tmp/**/*specs.js'],
   seleniumAddress: 'http://localhost:4444/wd/hub',
   verbose: true,
};
