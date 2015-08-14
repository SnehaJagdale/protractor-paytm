/**
 * Created by snehaj on 7/23/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var objBooksPage = require('../../page/BooksPage.js');
var objBrowser = require('../../ui_elements/Browser.js');

describe ('This a software test specification for books page in PayTM Website', function() {

    beforeEach(function () {
        objBrowser.launchBrowser("https://paytm.com");
    });

    it('Should Invokes the Books Tab and return title of Books page', function (done) {
        objBooksPage.clickBooksTab();
        var Title = 'Online Book Store - Buy Books Online in India | Paytm.com';
        expect(objBrowser.getTitleBrowser()).to.eventually.equal(Title);
        done();
    });

    it('Should have list items present on the Books Page', function (done) {
        objBooksPage.clickBooksTab();
        objBooksPage.VerifyListItems();
        done();
    });

});