
export function Player(total,current) {
  this.total = total;
  this.current = current;
}

export function rollDice(min, max) {
  // if(pOneScore.total >=  100) {
  //   alert("Player One Wins! Player Two sucks eggs!");
  // } else if (pTwoScore.total >= 100) {
  //   alert("Player Two Wins! Player One uses paper towels for tissue.");
  // } else {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }
// }

// function Player(total,current) {
//   this.total = total;
//   this.current = current;
// }

Player.prototype.roll = function(result) {
  if(result == 1) {
    this.current = 0;
    Player.prototype.hold(pOneScore.current);
    alert("You rolled a 1! GET OUT!");
  } else {
    this.current += result;
  }
}

// function rollDice(min, max) {
//   if(pOneScore.total >=  100) {
//     alert("Player One Wins! Player Two sucks eggs!");
//   } else if (pTwoScore.total >= 100) {
//     alert("Player Two Wins! Player One uses paper towels for tissue.");
//   } else {
//   return (min-1) + Math.ceil(Math.random() * (max-min + 1));
//   }
// }

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





