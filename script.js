function computerPlay() {
    let move = ["Rock", "Paper", "Scissors"];
    let randomMove = [Math.floor(Math.random() * move.length)];
    if (randomMove == 0 || randomMove == 1 || randomMove == 2) {
        return "Computer played " + move[randomMove];
    }
}

