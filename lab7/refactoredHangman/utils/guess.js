export function handleGuessHelper(game, config) {
    if (!game.gameActive) return;
    let guess = config.guessInput.value.toLowerCase();

    config.guessInput.value = "";
    if (!guess || guess.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    if (game.guessedLetters.includes(guess)) {
        alert("You already guessed that letter.");
        return;
    }

    let charCode = guess.charCodeAt(0);
    if (charCode < 97 || charCode > 122) {
        alert("Please enter a valid letter (a-z).");
        return;
    }

    game.guessedLetters.push(guess);
    if (!game.selectedWord.includes(guess)) {
        game.lives--;
        game.updateLives();
    }

    game.updateWordDisplay();
    game.restartTimer();
    game.checkWin();
}
