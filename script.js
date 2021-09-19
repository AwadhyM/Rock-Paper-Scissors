function computerPlay() {
    let move = ["Rock", "Paper", "Scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
    if (randomMove == 0 || randomMove == 1 || randomMove == 2) {
        return "Computer played " + move[randomMove];
    }
}

function playerPlay() {
    let playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    let playerSelection = playerInput.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return "You played " + playerSelection;
    }
}

function playRound(playerSelection,computerSelection) {
 if (playerSelection == "rock" && computerSelection == "Scissors") {
     return console.log("You win! Rock beats Scissors!");
 } else if (playerSelection == "scissors" && computerSelection == "Paper") {
     return console.log("You win! Scissors beats Paper!");
 } else if (playerSelection == "paper" && computerSelection == "Rock") {
     return console.log("You win! Paper beats Rock!");
 } else if (playerSelection == "scissors" && computerSelection == "Rock") {
     return console.log("You lose! Rock beats Scissors!");
 } else if (playerSelection == "paper" && computerSelection == "Scissors") {
     return console.log("You lose! Scissors beats Paper");
 } else if (playerSelection == "rock" && computerSelection == "Paper") {
     return console.log("You lose! Paper beats Rock");
 }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
