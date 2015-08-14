/**
 * Created by snehaj on 7/23/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var objElectronicsPage = require('../../page/MenPage.js');
var objBrowser = require('../../ui_elements/Browser.js');

describe ('This a software test specification for Men\'s Page in PayTM Website', function() {

    beforeEach(function () {
        objBrowser.launchBrowser("https://paytm.com/shop/h/men");
    });

    it('Should Invokes the Men\'s Tab and return the title of the Mens page', function (done) {
        var Title = 'Men' + String.fromCharCode(8217) + 's Store - Buy Men\'s Shoes, Apparels & Accessories Online in India | Paytm.com';
        expect(objBrowser.getTitleBrowser()).to.eventually.equal(Title);
        done();
    });

    it('Should have the list items present on the Mens Page', function (done) {
        objElectronicsPage.VerifyListItems();
        done();
    });
});
