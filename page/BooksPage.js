/**
 * Created by snehaj on 7/23/2015.
 */

var objList = require('../ui_elements/List');
var objTab = require('../ui_elements/Tab');

var catergoryList = element.all(by.css('.blocks li'));
var menItemnList = ['Entrance Exam','Literature & Fiction','Academic & Professional','Biographies & Auto Biographies','Children & Teens','Business & Management','Gifting Store','Audio & Video Books','Non Fiction','Self Help','Religion & Spirituality','Sports and Games','Regional Books','Hobbies','Others'];
var booksTab = element(by.css('a[href="/shop/h/books"]'));


exports.VerifyListItems = function () {
    objList.VerifyNoListItems(catergoryList,menItemnList);
}         ;

exports.clickBooksTab = function () {
    objTab.clickOnTab(booksTab);
}   ;