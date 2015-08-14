/**
 * Created by snehaj on 7/16/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
var _this = this;
exports.clickOnTab = function(element) {
    element.click();
} ;


exports.VerifyAllTabs = function(tabXpath,tabTags,tabNames) {
    for (var i=0;i<tabTags.length;i++) {
            if (tabTags[i]==='/bus-tickets')
            {
                tabXpath1 = "a[href='/bus-tickets']";
            }
            else{
                tabXpath1 = tabXpath.replace('tab',tabTags[i]);
            }
        //console.log("Path "+ tabXpath1);
        var elements = element(by.css(tabXpath1));
            (elements.getText()).should.eventually.equal(tabNames[i]);
        }
} ;

exports.clickOnTabAndSubTab = function(element,subTab) {
    browser.actions().mouseMove(element).perform();
    _this.clickOnTab(subTab);
}