 // Global variables in order to pass parameters to the functions.

 let playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
 let playerSelection = playerInput.toLowerCase();
 const computerSelection = computerPlay();   
 let playerScore;
 let computerScore; 

// Function for the computer to randomly generate a move.

function computerPlay() {
    let move = ["Rock", "Paper", "Scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
    if (randomMove == 0 || randomMove == 1 || randomMove == 2) {
        return move[randomMove];
    }
}

// Function that plays a single round and returns a win/loss message 

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock";
   } else if (playerSelection == "rock" && computerSelection == "Rock") {
       return "It's a tie. You both drew Rock";
   } else if (playerSelection == "paper" && computerSelection == "Paper") {
       return "It's a tie. You both drew Paper";
   } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
       return "It's a tie. You both drew Scissors";
   }
}

   
// testing the round: console.log(playRound(playerSelection, computerSelection));

