'use strict';


    var loginpopup = element(by.css('#ng-app'));
    //browser.switchTo().frame(element(by.xpath("html/body/div[13]/div/div/div/iframe")));
    var username = element(by.xpath("//*[@id='loginForm']/div[2]/input")); //model('sessionData.email'));
    var password = element(by.model('sessionData.password'));
    var loginbutton = element(by.css('.btn.btn-primary.ng-binding'));
    var objText = require('../ui_elements/TextField');
    var objButton = require('../ui_elements/Button');



    exports.verifyLoginPopup = function () {
        return loginpopup.isPresent();
    };

    exports.login = function (usernamevalue, passwordvalue) {
        objText.Entertextfieldata(username, usernamevalue);
        objText.Entertextfieldata(password, passwordvalue);
        objButton.ClickButton(loginbutton);
    };
