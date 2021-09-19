function computerPlay() {
    let move = ["Rock", "Paper", "Scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
    if (randomMove == 0 || randomMove == 1 || randomMove == 2) {
        return move[randomMove];
    }
}

// computerSelection = computerPlay();

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
    }
   }

   
   let playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
   const playerSelection = playerInput.toLowerCase();
   const computerSelection = computerPlay();
   console.log(playRound(playerSelection, computerSelection));

