// loop for the alert

let i = 0;

do {
    alert('Welcome to my game of Rock Paper Scissors. You will be playing against a computer. Follow the instructions of the screen to access the game!')
 i++;
} while (i < 1);

// Global variables in order to pass parameters to the functions.

 let computerSelection = computerPlay();   
 let playerScore = 0;
 let computerScore = 0;

// Function for the computer to randomly generate a move.

function computerPlay() {
    let move = ["rock", "paper", "scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
        return move[randomMove];
    }

const playerInputButtons = document.querySelectorAll('button');
const playerButtonElement = document.getElementById('btn');

playerInputButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerChoice = button.id;
        const playerSelection = `"${playerChoice}"`
        console.log(playerSelection);
        console.log(playRound());
    })
});

//buttons.forEach((button) => {
  //  buttonElement.addEventListener('click', () => {
  //      const playerSelection = document.querySelector()
  //      playRound(playerSelection, computerSelection);
  //  });
// });

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
       return `Invalid move! So we are giving this to the the computer whose score is now ${++computerScore}`;
    }
}

//console.log(playRound(playerSelection, computerSelection));

//function game() {

  //  for (i = 0; i <= 5; i++) {
    //playerInput = prompt("Enter your move: Rock, Paper or Scissors", "");
    //playerSelection = playerInput.toLowerCase();
    //computerSelection = computerPlay();
    //console.log( `you played ${playerSelection}`);
    //console.log( `Your opponent played  ${computerSelection}`);
    //console.log(playRound(playerSelection, computerSelection));
    //}

 gameWin(playerScore, computerScore);


function gameWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return alert("Congratulations! You won this game of Rock, Paper, Scissors")
    } else {
        return alert("Better luck next time! You lost this game of Rock, Paper, Scissors")
    }
}

console.log(game());
