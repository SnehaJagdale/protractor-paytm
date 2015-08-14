/**
 * Created by snehaj on 7/23/2015.
 */
var objList = require('../ui_elements/List');
var catergoryList = element.all(by.css('.blocks li'));
var menItemnList = ['Clothing','Footwear','Watches','Sunglasses & Spectacles','Bags & Luggage','Grooming & Personal Care','Accessories','Men\'s Jewellery','Combo Deals'];


exports.VerifyListItems = function () {
    objList.VerifyNoListItems(catergoryList,menItemnList);
};