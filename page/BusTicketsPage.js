/**
 * Created by zubairp on 24/07/15.
 */

var objText = require('../ui_elements/TextField');
var objButton = require('../ui_elements/Button');
var objList = require('../ui_elements/List');
var objCalendar = require('../ui_elements/Calendar');
var origin = element(by.model('startLocation'));
var destination = element(by.model('destinationLocation'));
var suggestestList = element(by.css('.dropdown-menu'));
var proceedButton = element(by.css('#recharge .tp10 button'));
var calendarButton = element(by.css('.picker__backdrop'));
var productList = element.all(by.css('.product-listing .grid-tic'));
var objItemsContainer = require('../ui_elements/ItemsContainer.js');
var objLoginPage = require('../page/LoginPage.js');
var avialableSeat = ".bus-seat a img[src='https://shop.paytm.com/images/available-seat2.png']";
var seat = element(by.xpath(".//*[@id='site-wrapper']/div[5]/div/span/div[1]/div[4]/div[3]/div[9]/div[2]/div/div[1]/div/ul[2]/li[1]/a/img[5]"));
var dropdownItems = element(by.xpath(".//*[@class='grid-tic ng-scope'][1]//*[@id='boarding-point']/ul/li[1]"));//.//*[@id='boarding-point']/ul/li[1]"));
var dropdown = element(by.xpath("//div[@class='seats-chart clear active']/div[2]/div/div[2]/div[6]/div[1]/ul")); //css('ul.drpdwn-arrow-bus1'));//
var proccedButton = element(by.xpath("//*[@id='site-wrapper']/div[5]/div/span/div[1]/div[4]/div[3]/div[10]/div[2]/div/div[2]/div[9]/button")); //css('button.btn.btn-primary.btn-block.w-240'));
var busType = element(by.xpath("//*[@id='site-wrapper']/div[5]/div/span/div[1]/div[3]/div[3]/div/ol/li[1]/div/span"));
var busOperators = element(by.xpath("//*[@id='site-wrapper']/div[5]/div/span/div[1]/div[3]/div[5]/div/ol/li[5]/div"));
var seats = element.all(by.css('.product-listing .grid-tic .seats-chart .bus-seat .seats-container .fixed-width'));
//******************** functions *******************

exports.ticketBooking = function(originData,destinationData,dateOfJourneyData) {
    objText.Entertextfieldatawithtab(origin,originData);
    objText.Entertextfieldatawithtab(destination,destinationData);
    objCalendar.clickOnDate(dateOfJourneyData);
    objButton.ClickButton(proceedButton);

    objButton.ClickButton(busType);
    objButton.ClickButton(busOperators);
    browser.executeScript('window.scrollTo(0,0);');

    objItemsContainer.clickOnItemBasedOnIndex(productList,0);
    objItemsContainer.clickOnItemBasedOnIndex(seats,0);
    objList.clickOnList(dropdown);
    objList.clickOnList(dropdownItems);
	objButton.ClickButton(proccedButton);
    //expect(objLoginPage.verifyLoginPopup()).to.become(true);
};