var radio = require('radio'),
    $     = require('jquery');

var gameView = require('../scripts/gameView');
var gameModel = require('../scripts/gameModel');

var gameOptions = {
  numberOfCards: 9,
  numberOfDie: 2,
  dieSides: 6,
  defSide: 3,
  userName: "Anon"
}

describe('Game initializes', function() {
  it("sanity check", function(){
    expect(true).toBe(true);
  });

  it ("gameView to be an object which initializes", function(){
    var gameView = new require('../scripts/gameView');
    expect(gameView).not.toBe(undefined);
  });

    it ("gameModel to be an object which initializes", function(){
    var gameModel = new require('../scripts/gameModel')(gameOptions);
    expect(gameModel).not.toBe(undefined);
  });
});

// TODO: Test functionality of various events