# protractor-paytm

Protractor EndtoEnd Testing of PayTM:
We have developed a E2E testing framework for the PayTM website using Protractor. Protractor is a wrapper around WebdriverJS an end-to-end testing framework for AngularJS applications and works as a solution integrator - combining powerful tools and technologies such as NodeJS, Selenium Webdriver. 

PREREQUISITES:
-Nodejs,
-Protractor

HOW TO SETUP:
-On command line, go to the master branch and run following cmd
"npm install"
It will install all the required node modules for this project.

HOW TO RUN:
-To run test cases, first we have to start Webdriver Manager. Webdriver-Manager is start by grunt by following cmd
"grunt driver"
-Now, we can run any suites by its name
"grunt smoke"
"grunt regression"
"grunt allSuite"
