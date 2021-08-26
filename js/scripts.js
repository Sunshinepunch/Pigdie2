
function Player(total,current) {
  this.total = total;
  this.current = current;
}

Player.prototype.roll = function(result) {
  if(result == 1) {
    this.current = 0;
    Player.prototype.hold(pOneScore.current);
    alert("You rolled a 1! GET OUT!");
  } else {
    this.current += result;
  }
}

function rollDice(min, max) {
  if(pOneScore.total >=  100) {
    alert("Player One Wins! Player Two sucks eggs!");
  } else if (pTwoScore.total >= 100) {
    alert("Player Two Wins! Player One uses paper towels for tissue.");
  } else {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }
}

Player.prototype.hold = function(current) {
  if(pOneScore.total >= 100) {
    alert('Wow you won. Go outside.');
  } else if (pTwoScore.total >= 100) {
      alert('Huh. Guess your dad was wrong. You can do something.');
  } else {
    this.total += current;
    this.current = 0;
  }
}





let pOneScore = new Player (0,0);
let results = 0
let pTwoScore = new Player (0,0);

function AHHHH() {
  if (results===1) {
    $('#play-area-1').toggle();
    $('#play-area-2').toggle();
  };
}



$(document).ready(function() {
  $("form#roll-dice1").submit(function(event) {
    event.preventDefault();
    results = rollDice(1,6);
    pOneScore.roll(results);
    AHHHH(results);
    $("#chalkboard1").text(pOneScore.current);
  });

  $("form#hold-one").submit(function(event) {
    event.preventDefault();
    pOneScore.hold(pOneScore.current);
    $("#totalscore1").text(pOneScore.total);
    $("#play-area-2").show();
    $("#play-area-1").hide();
  });


  $("form#roll-dice2").submit(function(event){
    event.preventDefault();
    results= rollDice(1,6);
    pTwoScore.roll(results);
    AHHHH(results);
    $("#chalkboard2").text(pTwoScore.current);
  });

  $("form#hold-two").submit(function(event) {
    event.preventDefault();
    pTwoScore.hold(pTwoScore.current);
    $("#totalscore2").text(pTwoScore.total);
    $("#play-area-2").hide();
    $("#play-area-1").show();
  });
});
