# Udacity Project 6: Feed Reader Testing

This was a project in which I took an already completed (albeit simple) website and used the Jasmine testing framework to write various tests of its functionality. Compared to the previous project, this was actually very simple and involved less straight out design.

All of the required tests pass, and I believe they adequately cover the functinoality that needs to be tested. One additional test was added to the "Initial Entries" specs - it tests to make sure that the important loadFeed() function that fetches data based on passed in feed names and URLs actually executes. It doesn't really need to be a separate function in the strictest sense, but having it as one made it easier to debug the test suites.

To view the project's code, see my repository at https://github.com/GabeKagan/frontend-nanodegree-feedreader; a live version is available at http://gabekagan.github.io/frontend-nanodegree-feedreader. This website is very easy to operate. When you open it up, all the relevant tests will run automatically, as long as you have all the files included in the repository.

Besides the stock resources provided as part of the course and project (and the Jasmine 2.1 documentation), I also used Jasmine-jQuery (https://github.com/velesin/jasmine-jquery) to furnish useful additional matchers and other important functionality. Any other resources can be viewed in feedreader.js, which contains the test specs written for this project.