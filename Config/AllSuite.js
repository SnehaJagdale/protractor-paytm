
// An example configuration file.

//var HtmlReporter = require('protractor-html-screenshot-reporter');
var Mocha = require('html_table_reporter');
exports.config = {
  allScriptsTimeout : 60000,
  getPageTimeout : 60000,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities:{
    'browserName': 'chrome'
  },

  // Framework to use.
  framework: 'mocha',

  // Spec patterns are relative to the current working directly when
  // protractor is called.

  specs: ['../test/**/*.js'],

//  Options to be passed to Mocha.
  mochaOpts:{
    reporter: 'html_table_reporter',
    outputFile: 'report/report.html',
    timeout: 80000
  },

//  mochaTest: {
//    test: {
//      specs: ['test/Automative/*.js'],
//      reporter: 'html_table_reporter',
//      outputFile: 'report/report.html',
//      grep:'Smoke',
//
//      timeout: 60000
//  } }  ,
  onPrepare: function setup() {

    browser.driver.manage().window().setSize(1000,1600);
    //browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(60000);

  }

};