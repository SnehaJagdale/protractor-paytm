/**
 * Created by snehaj on 7/16/2015.
 */
var electronicstab = element(by.css('a[href="/shop/h/electronics"]'));
var objTab = require('../ui_elements/Tab');
var objImage = require('../ui_elements/ImageBox');
var objList = require('../ui_elements/List');
var objItemsContainer = require('../ui_elements/ItemsContainer');
var imageBox = element(by.css('#displayed-product img'));
var catergoryList = element.all(by.css('.blocks li'));
var offersList = element.all(by.css("#p-carousel-items li"));
var expectedListItems = ['Mobile & Accessories','Computers & Accessories','Storage','Camera & Accessories','Gaming','Security Systems','Home Entertainment','Home Appliances','Kitchen Appliances','Personal Grooming'];
var offersListItems = ['Smartphones | Up to Rs. 10,000 Cashback','Upto 70% Off on Kitchen Appliances','Laptops | up to 18% Cashback','Camera Accessories | Flat 35% off','LED TVs UPto 30% off','HDDs Upto Rs 2000 Off'];
var link = element(by.css('#p-carousel-items a[href = "/shop/g/electronics/the-electronic-store/carousal/laptops-up-to-18-cashback"]'));
var itemsConatiner = element.all(by.css('.sub-sliding_container2.clearfix li a'));
var breadCrumb = element(by.css('.fl li div a span'));

exports.clickOnElectronicsTab = function () {
    objTab.clickOnTab(electronicstab);
} ;

exports.VerifyListItems = function () {
    objList.VerifyNoListItems(catergoryList,expectedListItems);
}  ;

exports.VerifyOfferListItems = function () {
    objList.VerifyNoListItems(offersList,offersListItems);
}  ;

exports.VerfiyImageBoxPresent = function() {
    return objImage.verifyImageisPresent(link);
} ;

exports.clickOnLink = function() {
    objList.clickOnList(link);
} ;

exports.clickOnImageBoxAndVerifyTitle = function() {
    objItemsContainer.clickOnItemBasedOnIndex(itemsConatiner,2);
    expect(breadCrumb.getAttribute(value)).should.eventually.equal('gfgfgfgfgf');
}  ;