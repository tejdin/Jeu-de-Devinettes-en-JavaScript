

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, secretNumber) {
  let diffhuman = Math.abs(secretNumber - human);

  let diffcomputer = Math.abs(secretNumber - computer);
  if (diffhuman <= diffcomputer) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner == "human") humanScore++;
  else computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}

let x = generateTarget();
console.log(x);

console.log(compareGuesses(5, 6, x));
