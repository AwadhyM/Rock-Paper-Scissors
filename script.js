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

