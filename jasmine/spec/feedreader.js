/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has valid URLs', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
                expect(allFeeds[i].url.length).not.toBe(0);
            }

        });

        it('has valid names', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

    //Some implementation details taken from http://discussions.udacity.com/t/testing-if-menu-is-visible-hidden-after-menu-icon-is-clicked/10175
        it('is hidden by default', function(){
            /*The menu is displayed by removing the "menu-hidden" class from the 
            main HTML body tag with the jQuery method toggleClass.
            It looks like Jasmine can use jQuery statements by default; but note the matchers from Jasmine-jQuery.
            */
            expect($('body')).toHaveClass("menu-hidden");
        });

        describe('The menu icon', function() {
            
            //Simulates clicking the little menu icon in the upper left.
            beforeEach(function() {
                $('.menu-icon-link').trigger('click'); 
            });  

            it('displays the menu if the menu is hidden', function(){
                expect($('body')).toHaveClass("");
            });
            it('hides the menu if the menu is displayed', function(){
                expect($('body')).toHaveClass("menu-hidden");
            });  
        });
    });

    describe('Initial entries', function() {
        var entryAmount;
        beforeEach(function(done) {
            setTimeout(function() {
            entryAmount = $(".entry").length;
            done();
            }, 500);
            
        });

        //This function is not required by the assignment.
        it('have their data fetched by loadFeed()', function(done){
            spyOn(window, 'loadFeed');
            window.loadFeed(0);
            expect(window.loadFeed).toHaveBeenCalled();
            done();
        });

        it('display when loadFeed() is called', function(done){

            expect(entryAmount).not.toBe(0); //Needs to be properly timed.
            done();

        });

    });

    describe('New feed selection', function() {
    var originalEntry, entryContents;    
    beforeAll   (function(done) {
        setTimeout(function() {
            originalEntry = $(".feed").html();
            spyOn(window, 'loadFeed').and.callThrough();
            window.loadFeed(1);
            
            console.log(originalEntry);
            done();
        }, 100);
        
    });

        it('changes the data when loadFeed() is called', function(done){
            //This timeout is necessary in order to ensure the assignment goes through after the change.
            setTimeout(function() { 
                entryContents = $(".feed").html() 
                console.log(entryContents);
            }, 200);
            
            expect(window.loadFeed).toHaveBeenCalledWith(1);
            expect(originalEntry).not.toEqual(entryContents);
            done();
        });
    });
}());
