 // Global variables in order to pass parameters to the functions.

 //let playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
 //let playerSelection = playerInput.toLowerCase();
 let computerSelection = computerPlay();   
 let playerScore = 0;
 let computerScore = 0;

// Function for the computer to randomly generate a move.

function computerPlay() {
    let move = ["rock", "paper", "scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
        return move[randomMove];
    }


// Function that plays a single round and returns a win/loss message 

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win! Rock beats Scissors!, your score is now ${++playerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! Scissors beats Rock!, your score is now ${++playerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win! Paper beats Rock!, your score is now ${++playerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You lose! Rock beats Scissors!, the computer's score is now ${++computerScore}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You lose! Scissors beats Paper!, the computer's score is now ${++computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose! Paper beats Rock!, the computer's score is now ${++computerScore}`;
   } else if (playerSelection == computerSelection) {
       return  `It's a tie! You both drew the same move, your score is now ${++playerScore} and the computer's is ${++computerScore}`;
   } else {
       return `Invalid move! So we are giving this to the the computer whose score is now ${computerScore++}`;
   }
}

//console.log(playRound(playerSelection, computerSelection));

function game() {
    playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log( `you played ${playerSelection}`);
    console.log( `Your opponent played  ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    

    playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log( `you played ${playerSelection}`);
    console.log( `you played ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log( `you played ${playerSelection}`);
    console.log( `you played ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log( `you played ${playerSelection}`);
    console.log( `you played ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    console.log( `you played ${playerSelection}`);
    console.log( `you played ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
}

console.log(game());


