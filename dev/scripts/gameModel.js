var _     = require('underscore'),
    radio = require('radio');

module.exports = function(options){

  function checkAnswer(dice, cards){
    var diceTotal = _.reduce(_.pluck(dice, 'showing'), 
          function (memo, num) { return memo + num; },
        0),
        flippedCards  = _.where(cards, {flipped: 'flipped', shut: false}),
        flippedVals   = _.pluck(flippedCards, 'number'),
        ansTotal = _.reduce(flippedVals, function (memo, num) {return memo + num; });
    if (ansTotal !== diceTotal) return false;
    return true;
  }

  function Card(opts) {
    this.number = opts.number;
    this.flipped = 'unflipped';
    this.shut = false;
    this.flip = function(){
      if (this.flipped === 'flipped'){
        this.flipped = 'unflipped';
      }else {
        this.flipped = 'flipped';
      }
    };
    this.shutIt = function(){
      this.shut = true;
    };
  }

  function Die(opts) {
    this.sides    = opts.sides;
    this.showing  = opts.defSide;
    this.roll     = function(){
      this.showing = _.random(1, this.sides);
    };
  }

  function Player(opts){
    this.userName = opts.userName;
  }

  function findCard(cards, attr, param){
    var foundCard = _.find(cards, function(card) {
      return card[param] == attr;
    });
    return foundCard;
  }

  function findCards(cards, attr, param){
    var foundCards = _.filter(cards, function(card) {
      return card[param] == attr;
    });
    return foundCards;
  }

  function Game(opts) {
    var self = this;
    this.cards = this.cards || [];
    for (var i = 0; i < opts.numberOfCards; i++){
      this.cards.push(new Card({number: i + 1}));
    }

    this.dice = this.dice || [];
    for (var x = 0; x < opts.numberOfDie; x++){
      this.dice.push(new Die({  sides: opts.dieSides,
                                defSide: opts.defSide}));
    }

    this.player = this.player || new Player({userName: opts.userName});

    this.rollDice = function(){
      _.each(self.dice, function(die){
        die.roll();
      });
      radio('rolled').broadcast(self.dice);
    };

    this.flipCard = function(cardNum){
      var card = findCard(self.cards, cardNum, 'number');
      card.flip();
    };

    this.checkAnswer = function(){
      var answer = checkAnswer(self.dice, self.cards);  
      radio('answerChecked').broadcast(answer);
      if (answer === true) radio('endTurn').broadcast();
    };

    this.endTurn = function(){
      var cardsToShut = findCards(self.cards, "flipped", "flipped");
      _.each(cardsToShut, function(card){
        card.shutiIt();
      });
      radio('newTurn').broadcast(self.cards);
    };
  }

  return new Game(options);

};