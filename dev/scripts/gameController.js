var $           = require('jquery'),
    Handlebars  = require('handlebars'),
    Templates   = require('./Templates')(Handlebars);

Handlebars.partials.game = Templates['dev/templates/partials/game.hbs'];

var gameOptions = {
  numberOfCards: 9,
  numberOfDie: 2,
  dieSides: 6,
  defSide: 3,
  userName: "Anon"
}

var game = require('./gameModel')(gameOptions)

var mainData = {
  gameData: {
    dice: game.dice,
    cards: game.cards
  }
}

console.log(game);

game.checkAnswer()

var main = Templates['dev/templates/layouts/main.hbs']
var html = main(mainData);

$('body').append(html);