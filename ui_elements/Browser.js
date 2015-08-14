/**
 * Created by snehaj on 7/15/2015.
 */

var tabTags = new Array('','h/electronics','h/men','h/women','h/sports-and-health','h/home-and-kitchen','h/books','h/baby-kids-toys','h/automotive','/bus-tickets','g/hobbies');
var tabXpath = "a[href='/shop/tab']";
var tabNames = ['HOME','ELECTRONICS','MEN','WOMEN','SPORTS & HEALTH','HOME & KITCHEN','BOOKS','BABY, KIDS & TOYS','AUTOMOTIVE','BUS TICKETS','MORE...'];

var objTab = require('../ui_elements/Tab');

 exports.getTitleBrowser = function() {
    return browser.getTitle();
 };

exports.launchBrowser = function(url) {
    browser.get(url);
    //browser.driver.manage().window().maximize();
};

exports.verifyAllTabsOnBrowser = function() {
    objTab.VerifyAllTabs(tabXpath,tabTags,tabNames);

};

