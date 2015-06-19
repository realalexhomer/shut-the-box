# Shut-the-box

Allows you to play the game "shut the box" in your browser.

I think this app is a good example of modular code using Browserify. I followed an MV* approach, using Radio.js to follow a SubPub design pattern for decoupling the model and view. I didn't use any front-end framework but did opt to use jQuery and Handlebars.

For styling I used Sass and a few Bourbon mixins to make the game responsive using flexbox.

# Building 

To build the app npm install, and then run "grunt serve" in your terminal. Then host "main.html" in the dev file locally in your browser.

To run tests run "grunt test".

All developer files are located in the "dev" folder. All js files concactenate into "bundle.js" which is located in the "dist" folder. Sass is compiled into "main.css" in the "dist" folder.

To change the games options, you can edit the options in gameController.js. Options include playerName, number of dice, and number of cards.

Colors are easily changeable in the _variable partial in styles.

Coming soon: scoring, as well as something that happens when you win or lose. Also, more test.