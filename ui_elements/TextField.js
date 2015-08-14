/**
 * Created by snehaj on 7/14/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();

    var _this = this;

    exports.Entertextfieldata = function(element, data) {
    element.sendKeys(data);
    };

   exports.Entertextfieldatawithtab = function(element, data) {
       _this.Entertextfieldata(element,data);
       element.sendKeys(protractor.Key.TAB);
   };

     exports.getTextValue = function(element) {
         var returnVal = element.getAttribute('value');
         return returnVal;
     } ;


     exports.verifyValue = function(element,data) {
          elementvalue = _this.getTextValue(element).should.eventually.equal(data);
       return elementvalue;
     }  ;