/**
 * Created by zubairp on 05/08/15.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();

exports.clickOnDate = function (tileText) {
    'use strict';
    //Select all date elements and apply filter function
    element.all(by.css('.picker__day')).filter(function (elem) {
        //Return the element or elements
        return elem.getText().then(function (text) {
            //Match the text
            return text === tileText;
        });
    }).then(function (filteredElements) {
        //filteredElements is the list of filtered elements
        filteredElements[0].click();
    });
};
