/**
 * Created by snehaj on 8/6/2015.
 */
var objTab = require('../ui_elements/Tab');
var objItemsContainer = require('../ui_elements/ItemsContainer.js');
var objButton = require('../ui_elements/Button');
var objLogin = require('../page/LoginPage');


var mobileTab = element(by.css('a[href="/shop/g/electronics/mobile-accessories/mobiles"]'));
var electronicstab = element(by.css('a[href="/shop/h/electronics"]'));
var productcategory = element.all(by.css('.product-listing ul li img'));
var buybutton = element(by.css('.btn.btn-buy.btn-lg'));

exports.clickOnMobileTab = function () {
    objTab.clickOnTabAndSubTab(electronicstab,mobileTab);
}

exports.clickOnItem = function () {
    objItemsContainer.clickOnItemBasedOnIndex(productcategory,0);
}

exports.clickOnBuy = function () {
    objButton.ClickButton(buybutton);
}