var expect = require('expect');
var sampleSteps = function() {
    this.Given(/^I am on the angular page$/, function(callback) {
       browser.get('http://angularjs.org/');
       callback();
    });


    this.Given(/^I am on the "([^"]*)" page$/, function(link, callback) {
        browser.get('http://'+link);
        callback();
    });

    this.Then(/^I should see "([^"]*)" examples$/, function(exAmount, callback) {


        var list = element.all(by.css('.example'));

        list.count().then(
            function(count){
                expect(count).toBe(parseInt(exAmount));
                callback();
            },callback
        );
        callback();
    });

    this.Then(/^I should see "([^"]*)" title$/, function(title, callback) {
        browser.getTitle().then(
            function(siteTitle){
                expect(siteTitle).toBe(title);
                callback();
            },callback
        );
        callback();
    });

};

module.exports = sampleSteps;