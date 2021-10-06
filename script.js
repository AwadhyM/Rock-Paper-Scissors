const roundResults = document.querySelector('.roundresults');
roundResults.classList.add('resultsdiv');
const resultsText = document.createElement('p');
roundResults.appendChild(resultsText);

const divforreplay = document.createElement('div');
roundResults.appendChild(divforreplay);

const replaybutton = document.createElement('button');
replaybutton.textContent = 'Restart Game';
divforreplay.appendChild(replaybutton);

const playerInputButtons = document.querySelectorAll('button');
const playerButtonElement = document.getElementById('btn');
const playerResult = document.querySelector('.updatePS');
const computerResult = document.querySelector('.updateCS');






// loop for the alert
let i = 0;
do {
    alert('Welcome to my game of Rock Paper Scissors. You will be playing against a computer opponent!')
 i++;
} while (i < 1);


// Global variables in order to pass parameters to the functions.

 let playerScore = 0;
 let computerScore = 0;
 

 function checkWinner() {
 if (playerScore === 5 && playerScore > computerScore) {
     resultsText.textContent = 'Congratulations you have beaten the computer.'
     replaybutton.textContent = 'Try again';
 } else if (computerScore === 5 && computerScore > playerScore) {
    resultsText.textContent = 'You lost. But failure is the stepping stone to success.'
    replaybutton.textContent = 'Try again';
 } else if (playerScore === 5 && computerScore === 5) {
    resultsText.textContent = 'You have met a worthy adversary and tied.'
    replaybutton.textContent = 'Try again';
 }
}


// Function for the computer to randomly generate a move.

function computerPlay() {
    let move = ['rock', 'paper', 'scissors'];
    let randomMove = [Math.floor(Math.random() * move.length)];
        return move[randomMove];
    }

// code for player to play the game

playerInputButtons.forEach((button) => {
    button.addEventListener('click', playGame)
});

function playGame(e) {
    console.log(e.target.id);
    const playerSelection = e.target.id;
    let computerSelection = computerPlay();  
    playRound(playerSelection,computerSelection);
    checkWinner();
    endGame();
}


//replay button

replaybutton.addEventListener('click', replayGame);

function replayGame(e) {
    location.reload();
    return false;
} 

// function that disables buttons once 5 rounds are complete 

function endGame() {
 if (playerScore == 5 || computerScore == 5) {
   playerInputButtons.forEach((button) => {
   button.removeEventListener('click', playGame)
   });
 }
}

// Function that plays a single round and returns a win/loss message 

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
       resultsText.textContent = 'You win! Rock beats Scissors!';
       playerResult.textContent = `${++playerScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
       resultsText.textContent = 'You win! Scissors beats Rock!';
       playerResult.textContent = `${++playerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
       resultsText.textContent = 'You win! Paper beats Rock!';
       playerResult.textContent = `${++playerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        resultsText.textContent = 'You lose! Rock beats Scissors!';
        computerResult.textContent = `${++computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       resultsText.textContent = 'You lose! Scissors beats Paper!';
       computerResult.textContent = `${++computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        resultsText.textContent = 'You lose! Paper beats Rock!';
        computerResult.textContent = `${++computerScore}`;
    } else if (playerSelection == computerSelection) {
        resultsText.textContent = 'It\'s a tie! You both drew the same move.';
        computerResult.textContent = `${++computerScore}`;
        playerResult.textContent = `${++playerScore}`;
    } 
}
