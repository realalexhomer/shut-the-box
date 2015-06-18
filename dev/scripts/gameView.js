$ = require('jquery');

module.exports = function(options){


  function checkAnswer(dice, cards){
    var diceTotal = _.reduce(_.pluck(dice, 'showing'), 
          function (memo, num) { return memo + num; },
        0),
        flippedCards  = _.where(cards, {flipped: true}),
        flippedVals   = _.pluck(flippedCards, 'number'),
        ansTotal = _.reduce(flippedVals, function (memo, num) {return memo + num; });
    if (ansTotal !== diceTotal) return false;
    return true;
  }

  function Card(opts) {
    this.number = opts.number;
    this.flipped = false;
    this.flip = function(){
      this.flipped = !this.flipped;
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

  function Game(opts) {
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

    this.checkAnswer = function(){
      return checkAnswer(this.dice, this.cards);
    };

  }

  return new Game(options);

};