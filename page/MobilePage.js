/**
 * Created by snehaj on 8/6/2015.
 */
var objTab = require('../ui_elements/Tab');
var objItemsContainer = require('../ui_elements/ItemsContainer.js');
var objButton = require('../ui_elements/Button');
var objLogin = require('../page/LoginPage');


var mobileTab = element(by.xpath("//div[@id='menu-pane']/div[2]/ul[1]/li[2]/a")); //css('a[href="/shop/g/electronics/mobile-accessories/mobiles"]'));
var electronicstab = element(by.xpath("//div[@id='menu']/a[2]"));//by.css('a[href="/shop/h/electronics"]'));
var productcategory = element.all(by.css('.product-listing ul li img'));
var buybutton = element(by.xpath("//div[@class='discraption']/div[2]/div/button[1]"));//'.btn.btn-buy.btn-lg'));

exports.clickOnMobileTab = function () {
    objTab.clickOnTabAndSubTab(electronicstab,mobileTab);
}

exports.clickOnItem = function () {
    objItemsContainer.clickOnItemBasedOnIndex(productcategory,0);
}

exports.clickOnBuy = function () {
    objButton.ClickButton(buybutton);
}