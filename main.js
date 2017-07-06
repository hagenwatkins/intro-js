// Rock Paper Scissors Function
function rps(p1, p2) {

  if ((p1 === 'rock' && p2 === 'scissors') || (p1 ===  'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
    return 'Player 1 wins';
  }
  else if (p1 === p2) {
    return 'draw';
  }
  else {
    return 'Player 2 wins';
  }

}



  // write code here



// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
