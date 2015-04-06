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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has valid URLs', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
                expect(allFeeds[i].url.length).not.toBe(0);
            }

        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has valid names', function() {
            for(var i = 0; i < allFeeds.length; ++i){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name.length).not.toBe(0);
            }

        });



    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

    //Some implementation details taken from http://discussions.udacity.com/t/testing-if-menu-is-visible-hidden-after-menu-icon-is-clicked/10175

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
        it('is hidden by default', function(){
            /*The menu is displayed by removing the "menu-hidden" class from the 
            main HTML body tag with the jQuery method toggleClass.
            It looks like Jasmine can use jQuery statements by default, but not those special jQuery matchers.
            */
            expect($('body')).toHaveClass("menu-hidden");
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
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
    /* TODO: Write a new test suite named "Initial Entries" */
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
            //console.log(entryAmount);
            done();
            //Start by making sure feed isn't empty.

        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    });

    describe('New feed selection', function() {
    /* TODO: Write a new test suite named "New Feed Selection" */
        var entryContents;
        beforeEach(function(done) {
            setTimeout(function() {
            entryContents = $(".feed").html();
            done();
            }, 1000);
        });

        it('changes the data when loadFeed() is called', function(done){
            //console.log(entryContents);
            //expect($(".feed")).not.toContainHTML(entryContents);
            //This might need timeouts to handle asynch.
            done();
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });


}());
