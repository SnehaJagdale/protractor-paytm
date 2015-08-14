/**
 * Created by snehaj on 7/14/2015.
 *
 */

var objText = require('../ui_elements/TextField');
var objButton = require('../ui_elements/Button');
var mobileNumber = element(by.model('number'));
var mobileProvider = element(by.model('operatorName'));
var amount = element(by.model('amount'));
var proceedButton = element(by.css('.proceedButton'));

//******************** functions *******************
    exports.returnProvider = function(mobdata) {
     objText.Entertextfieldata(mobileNumber,mobdata);
        return objText.getTextValue(mobileProvider);
    }  ;

    exports.mobileRecharge = function(mobdata,mobprodata,mobamount) {
        objText.Entertextfieldata(mobileNumber,mobdata);
        objText.verifyValue(mobileProvider,mobprodata);
        objText.Entertextfieldata(amount,mobamount);
        objButton.ClickButton(proceedButton);
    }      ;

