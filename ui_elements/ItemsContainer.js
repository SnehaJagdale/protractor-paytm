/**
 * Created by snehaj on 7/22/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();

var _this = this;

exports.clickOnItemBasedOnIndex = function(element,index){
    element.get(index).click();
};