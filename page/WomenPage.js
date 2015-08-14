/**
 * Created by snehaj on 7/23/2015.
 */
var objList = require('../ui_elements/List');
var catergoryList = element.all(by.css('.blocks li'));
var menItemnList = ['Ethnic Wear','Western Wear','Designer Wear','Lingerie & Sleepwear','Footwear','Watches','Jewellery','Fashion Accessories','Beauty and Personal Care', 'Sunglasses & Spectacles','Bags & Wallets','Combo Deals'];


exports.VerifyListItems = function () {
    objList.VerifyNoListItems(catergoryList,menItemnList);
}      ;
