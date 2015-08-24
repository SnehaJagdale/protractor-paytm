/**
 * Created by snehaj on 7/14/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var objHomePage = require('../../page/HomePage.js');
var objProceedToPay = require('../../page/ProceedToPay.js');
var objLoginPage = require('../../page/LoginPage.js');
var objBrowser = require('../../ui_elements/Browser.js');
var objutils = require('../../utils/JSONDataToObject.js');

describe ('This a software test specification for Home Page in PayTM Website', function() {

    beforeEach( function() {
        objBrowser.launchBrowser("https://paytm.com/");

    });

    it ('Should have expected title for Home Page', function(done) {
        expect(objBrowser.getTitleBrowser()).to.eventually.equal('Online Mobile Recharge - Postpaid, DTH & Datacard Bill Payments at Paytm.com');
        done();
    });

    it ('Regression:Should Sets the mobile number and should return the mobile provider', function(done) {

        var mobileProviderData = objHomePage.returnProvider('9049894475');
        expect(mobileProviderData).to.eventually.equal('Vodafone');
        done();
    });

    it ('Regression:Should Sets number/amount and should return the provider', function(done) {
       // var rechargeData = objutils.SetData();
       // var mobNo = rechargeData[0].Number;
       // var mobOperator = rechargeData[0].Operator;
        //objHomePage.mobileRecharge(mobNo,mobOperator,'300');// '9049894475','Vodafone','300');
        objHomePage.mobileRecharge(browser.params.mobileData.mobileNo,browser.params.mobileData.mobileProvider,'300');// '9049894475','Vodafone','300');
        expect(objProceedToPay.returnLabelText()).to.eventually.equal('Recharge of ' + browser.params.mobileData.mobileProvider + ' Mobile ' + browser.params.mobileData.mobileNo + '  forRs 300');
        objProceedToPay.clickOnProceedButton();
        expect(objLoginPage.verifyLoginPopup()).to.become(true);
        done();
    });

    it ('Should have all tabs are present on Home Page Loading', function(done){
        objBrowser.verifyAllTabsOnBrowser();
        done();
    });
});
