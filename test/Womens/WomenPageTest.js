/**
 * Created by snehaj on 7/23/2015.
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var objElectronicsPage = require('../../page/WomenPage.js');
var objBrowser = require('../../ui_elements/Browser.js');

describe ('This a software test specification for Women Page in PayTM Website', function() {

    beforeEach(function () {
        objBrowser.launchBrowser("https://paytm.com/shop/h/women");
    });

    it('Should have Invokes the Women\'s Tab and should have the title of the Women page', function (done) {
        var Title = 'Women' + String.fromCharCode(8217) + 's Store - Buy Women\'s Apparels, Handbags, Shoes & Accessories Online in India | Paytm.com';
        expect(objBrowser.getTitleBrowser()).to.eventually.equal(Title);
        done();
    });

    it('Should have the list items present on the Women\'s Page', function (done) {
        objElectronicsPage.VerifyListItems();
        done();
    });
});
