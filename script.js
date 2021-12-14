let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  const userGuessDifferent = Math.abs(userGuess - secretNumber);
  const computerGuessDifferent = Math.abs(computerGuess - secretNumber);

  return userGuessDifferent <= computerGuessDifferent;
};

const updateScore = (winnerScore) => {
  if (winnerScore === "human") {
    humanScore++;
  } else if (winnerScore === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
