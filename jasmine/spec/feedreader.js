/* feedreader.js
 * Udacity Front End Web Developer Nanodegree
 * Project 6 - Javascript Testing with Jasmine
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {

        //These tests use the prebaked "allFeeds" array in app.js, which is then fed to jQuery's AJAX loader.
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //In retrospect, this test doesn't need to be run multiple times.
            expect(allFeeds.length).not.toBe(0);
        });

        //If the first spec fails, these next two are irrelevant.
        //A good next test to implement would be a regex matcher.
        it('have valid URLs', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].url).not.toBeNull(); 
                expect(allFeeds[i].url.length).not.toBe(0);
            }

        });

        it('have valid names', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

    //Some implementation details taken from http://discussions.udacity.com/t/testing-if-menu-is-visible-hidden-after-menu-icon-is-clicked/10175
        it('is hidden by default', function(){
            /* The menu is displayed by removing the "menu-hidden" class from the 
             * main HTML body tag with the jQuery method toggleClass.
             * It looks like Jasmine can use jQuery statements by default; but note the matchers from Jasmine-jQuery.
            */
            expect($('body')).toHaveClass("menu-hidden");
        });

        describe('The menu icon', function() {
            
            //Simulates clicking the little menu icon in the upper left.
            beforeEach(function() {
                $('.menu-icon-link').trigger('click'); 
            });  

            //This should be fine, since the tests are executed sequentially.
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
            //Timeouts are necessary since loading a feed takes actual time.
            setTimeout(function() {
            entryAmount = $(".entry").length;
            done();
            }, 500);
            
        });

        //This function is not required by the assignment.
        //It's useful because we want to make sure the function actually gets executed.
        it('have their data fetched by loadFeed()', function(done){
            spyOn(window, 'loadFeed');
            window.loadFeed(0);
            expect(window.loadFeed).toHaveBeenCalled();
            done();
        });

        it('display when loadFeed() is called', function(done){
            expect(entryAmount).toBeDefined(); 
            expect(entryAmount).not.toBe(0); //If the feed works, we should be getting at least one result. 
            done();
        });

    });

    describe('New feed selection', function() {
    //In this test, we compare the entire feed contents to make sure they've changed.
    //This may be inefficient on longer and more complicated feeds, though.
    var originalEntry, entryContents;    
    beforeAll (function(done) {
        setTimeout(function() {
            originalEntry = $(".feed").html(); 
            spyOn(window, 'loadFeed');
            window.loadFeed(1);
            //console.log(originalEntry);
            done();
        }, 100);
        
    });

        it('changes the data when loadFeed() is called', function(done){
            //This timeout is necessary in order to ensure the assignment goes through after the change.
            setTimeout(function() { 
                entryContents = $(".feed").html() 
                //console.log(entryContents);
            }, 200);
        
            expect(window.loadFeed).toHaveBeenCalledWith(1);
            expect(originalEntry).not.toEqual(entryContents);
            done();
        });
    });
}());
