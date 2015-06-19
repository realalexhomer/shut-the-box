var $           = require('jquery'),
    radio       = require('radio'),
    Handlebars  = require('handlebars'),
    Templates   = require('./Templates')(Handlebars);

var gameLayout      = Templates['dev/templates/layouts/game.hbs'],
    cardsPartial    = Templates['dev/templates/partials/cards.hbs'],
    dicePartial     = Templates['dev/templates/partials/dice.hbs'],
    controlsPartial = Templates['dev/templates/partials/controls.hbs'];

Handlebars.partials.cards     = cardsPartial;
Handlebars.partials.dice      = dicePartial;
Handlebars.partials.controls  = controlsPartial;

module.exports = function(game){

  function GameView (game) {
    var self = this;

    var gameData = {
      cardData: {
        cards: game.cards
      },
      diceData: {
        dice: game.dice
      }
    };

    $('body').append(gameLayout(gameData));

    var cards       =   $('.cards'),
        dice        =   $('.dice'),
        controls    =   $('.controls'),
        rollButton  =   controls.children('#control-roll'),
        turnButton  =   controls.children('#control-end-turn'),
        endButton   =   controls.children('#control-end-game');

    endButton.click(function(){
      self.endGame();
    });

    this.updateDice = function(diceState){
      dice.html(dicePartial({dice: diceState}));
    };

    this.updateCards = function(cardState){
      cards.html(cardsPartial({cards: cardState}));
    };

    this.initTurn = function(cards){
      if (cards){
        self.updateCards(cards);
      }
      rollButton.one('click',function(){
        radio('rollClick').broadcast();
      });
       $('.card').not('.shut').click(function(){
        card = $( this );
        radio('cardClick').broadcast(card.text());
        card.toggleClass('unflipped');
        card.toggleClass('flipped');
      });
      turnButton.on('click', function(){
        radio('endTurnClick').broadcast();
      });
    };

    this.flipCards = function(cardsState){
      dice.html(cardsPartial({cards: cardsState}));
    };

    this.endTurn = function(){
      $('card').off();
      turnButton.off();
    };

    this.displayAnswer = function(answer){
      if (answer === true){
        alert('you added the numbers right!');
        self.endTurn();
      } else if (answer !== undefined) {
        alert('you were wrong!');
      }
    };

    this.endGame = function(){
      alert("If you rolled the dice and can't shut any boxes, you lose. Otherwise, count up the boxes left and that is your score (low scores are better). To play again refresh the page!");
    };
  } 


  return new GameView(game);

};