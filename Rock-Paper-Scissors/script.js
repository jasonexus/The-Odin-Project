let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randChoice = Math.floor(Math.random() * 3);

  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter either Rock, Paper, or Scissors");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(`Current Scores - Player: ${humanScore}, Computer: ${computerScore}`);
  if (humanChoice == computerChoice) {
    console.log("Tie!");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock beats scissors! Player wins this round.");
    humanScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Paper beats rock! Computer wins this round.");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors cut paper! Player wins this round.");
    humanChoice += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Rock beats scissors! Computer wins this round.");
    computerChoice += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Scissors cut paper! Computer wins this round.");
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper beats rock! Player wins this round.");
    humanScore += 1;
  } else {
    console.log("Something went wrong.");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Scores - Player: ${humanScore}, Computer: ${computerScore}`)
}

playGame();
