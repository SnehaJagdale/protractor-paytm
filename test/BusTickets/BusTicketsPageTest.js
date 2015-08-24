/**
 * Created by zubairp on 24/07/15.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var objBusTicketsPage = require('../../page/BusTicketsPage.js');
var objBrowser = require('../../ui_elements/Browser.js');
var objLoginPage = require('../../page/LoginPage.js');


describe ('This a software test specification for Bus Tickets Page in PayTM Website', function() {

    beforeEach( function() {
        objBrowser.launchBrowser("https://paytm.com/bus-tickets");
    });

    it ('Smoke:Should have title of the Bus Tickets page', function(done) {
        expect(objBrowser.getTitleBrowser()).to.eventually.equal('Online Bus Ticket Booking, Book Volvo or AC Bus Tickets Online @ Paytm');
        done();
    });

    it ('Smoke:Should Sets Origin, Destination and search buses', function(done) {
        objBusTicketsPage.ticketBooking(browser.params.busTickets.src,browser.params.busTickets.destination,browser.params.busTickets.date);
        expect(objLoginPage.verifyLoginPopup()).to.become(true);
        done();
    });

});