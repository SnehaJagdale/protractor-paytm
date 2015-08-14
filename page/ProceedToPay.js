/**
 * Created by snehaj on 7/15/2015.
 */

var objLabel = require('../ui_elements/Label');
var textInCart = element(by.repeater('crt in cart.cart_items'));
var objButton = require('../ui_elements/Button');
var proceedButton = element(by.css('.wrapper.coup-fill.lightG-bg1 button'));

exports.returnLabelText = function() {
    return objLabel.getLabelValue(textInCart);
}     ;

exports.clickOnProceedButton= function() {
    objButton.ClickButton(proceedButton);
}    ;