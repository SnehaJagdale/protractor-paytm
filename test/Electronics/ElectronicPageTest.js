/**
 * Created by snehaj on 7/16/2015.
 */


var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var objElectronicsPage = require('../../page/ElectronicsPage.js');
var objBrowser = require('../../ui_elements/Browser.js');
//var catergoryList = element.all(by.css('.blocks li'));

describe ('This a software test specification for Electronics Page in PayTM Website', function() {

    beforeEach(function () {
        objBrowser.launchBrowser("https://paytm.com/");
    });

    it('Should Invokes the Electronics Tab and should have the title of Electronics Page', function (done) {
        objElectronicsPage.clickOnElectronicsTab();
        expect(objBrowser.getTitleBrowser()).to.eventually.equal('Electronic Store - Buy Mobile, Laptop & Accessories Online in India | Paytm.com');
        done();
    });

    it('Should have list item/images is present on the Electronics Page and return list items', function (done) {
        objElectronicsPage.clickOnElectronicsTab();
        objElectronicsPage.VerifyListItems();
        done();
    });

    /*Commented: Page Contains Dynamic Elements
    it('Should have the Imagebox and the Offers List item on Electronics Page and return List Items', function (done) {
        objElectronicsPage.clickOnElectronicsTab();
        objElectronicsPage.VerifyOfferListItems();
        expect(objElectronicsPage.VerfiyImageBoxPresent()).to.eventually.equal(true);
        done();
    });

    it('Should load different page on clicking on different offer links', function(done){
        objElectronicsPage.clickOnElectronicsTab();
        objElectronicsPage.clickOnLink();
            expect(objBrowser.getTitleBrowser()).to.eventually.equal('Paytm.com: Up to 18% Cashback on Laptops');
        done();
    });
     */

    /*
    it('Test promsise', function(done) {
        objElectronicsPage.clickOnElectronicsTab();
       // browser.sleep(6000);
        var t ;
        var  promise = catergoryList.get(0);
       console.log ("hi " + promise );
        promise.isPresent().then(function (isPresent) {
                promise.getText().then(function (data) {
                    console.log("Something is wrong here too");
                    console.log("data " + data);
                    t = data;
                });
            },function (error) {
                console.error('This is a error '+  error);   // 'uh oh: something bad happened
            }
        );
        console.log()
        done();
    });
*/
    /*it.only('This is to test clicking on Incrediable deals lead you to the right page',function (done){
            objElectronicsPage.clickOnElectronicsTab();
            objElectronicsPage.clickOnImageBoxAndVerifyTitle();
            //element.all(by.css('.sub-sliding_container2.clearfix li a')).get(2).click();
            done();
        }
    );*/
});