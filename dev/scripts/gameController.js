var radio = require('radio'),
    $     = require('jquery');

var gameOptions = {
  numberOfCards: 9,
  numberOfDie: 2,
  dieSides: 6,
  defSide: 3,
  userName: "Anon"
};

var gameModel = require('./gameModel')(gameOptions),
    gameView  = require('./gameView')(gameModel);

$('document').ready(function(){

  gameView.initTurn();
  
  radio('rollClick').subscribe(gameModel.rollDice);
  radio('rolled').subscribe(gameView.updateDice);
  radio('cardClick').subscribe(gameModel.flipCard);
  radio('endTurnClick').subscribe(gameModel.checkAnswer);
  radio('answerChecked').subscribe(gameView.displayAnswer);
  radio('endTurn').subscribe(gameModel.endTurn);
  radio('newTurn').subscribe(gameView.initTurn);

});