/**
 * Created by snehaj on 7/20/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
var _this = this;

exports.VerifyNoListItems = function(elements,listOfItems) {
    for (var i = 0; i < listOfItems.length; ++i) {
        try {
            expect(elements.get(i).getText().should.eventually.equal(listOfItems[i]));
            //_this.synchronizePromise(elements.get(i).getText());
        }
        catch(err)
        {
            console.log("This is error " + err);
        }
    }
    }  ;

exports.clickOnList = function (element) {
        element.click();
}   ;

/*
exports.testthispromise = function(elements) {
    var value;
    console.log("Something is wrong here");
    //for (var i = 0; i < listOfItems.length; ++i) {
    expect(elements.get(0).getText().should.eventually.equal('ya bab dab do'));
       //var promise =  elements.get(0).getText();
        var  promise = elements.get(0).getText();
       console.log ("hi " + promise );
        promise.then(function (data) {
                console.log("Something is wrong here too");
                console.log("data " + data);
        },function (error) {
                console.error('uh oh: '+  error);   // 'uh oh: something bad happened
            }
        );
        /*
        while (!value) {} // Wait for promise to resolve
        console.log("DONE: " + value); // Never reached
        return value;
    //}

}   ;
*/


