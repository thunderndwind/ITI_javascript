export function startGameHelper(game, category, config) {
    game.currentCategory = category;
    config.categorySelection.classList.add("hidden");
    config.gameScreen.classList.remove("hidden");
    config.difficultySelect.disabled = false;
    config.startGameButton.disabled = false;
    config.guessInput.disabled = true;
}

export function initializeGameHelper(game, config) {
    game.difficulty = config.difficultySelect.value;
    game.wordList = config.words[game.difficulty][game.currentCategory];

    game.selectedWord =
        game.wordList[Math.floor(Math.random() * game.wordList.length)];
    game.guessedLetters = [];
    game.lives = 6;
    game.timeLeft = 10;
    game.gameActive = true;
    config.difficultySelect.disabled = true;
    config.startGameButton.disabled = true;
    config.goBackButton.disabled = true;
    game.updateWordDisplay();
    game.startTimer(game, config);
    config.message.textContent = "";
    config.hangmanDrawing.textContent = config.hangmanStages[0];
    config.guessInput.disabled = false;
    config.guessButton.disabled = false;
    config.hintButton.disabled = false;
}

export function endGameHelper(game, won, config) {
    game.gameActive = false;
    clearInterval(game.timer);

    if (won) {
        config.message.textContent = "Congratulations! You won!";
        config.message.style.color = "green";
    } else {
        config.message.textContent =
            "Game over! The word was: " + game.selectedWord;
    }

    config.goBackButton.disabled = false;
    config.guessInput.disabled = true;
    config.guessButton.disabled = true;
    config.hintButton.disabled = true;
}

export function updateWordDisplayHelper(game, config) {
    let displayWord = game.selectedWord
        .split("")
        .map(function (letter) {
            return game.guessedLetters.includes(letter) ? letter : "_";
        })
        .join(" ");
    config.wordDisplay.textContent = displayWord;
}

export function updateLivesHelper(game, config) {
    config.livesCount.textContent = game.lives;
    config.hangmanDrawing.textContent = config.hangmanStages[6 - game.lives];
}

export function checkWinHelper(game) {
    if (
        game.selectedWord.split("").every((letter) => {
            return game.guessedLetters.includes(letter);
        })
    )
        game.endGame(true);
    else if (game.lives <= 0) game.endGame(false);
}

export function handleHintHelper(game, config) {
    if (!game.gameActive) return;
    let hintText = config.hints[game.currentCategory][game.selectedWord];
    if (hintText) {
        game.lives--;
        game.updateLives();
        alert("Hint: " + hintText);
        if (game.lives <= 0) game.endGame(false);
    } else {
        alert("No hint to display: ");
    }
}

export function resetGameHelper(game, config) {
    game.selectedWord = "";
    game.guessedLetters = [];
    game.lives = 6;
    game.timeLeft = 10;
    game.gameActive = false;
    config.difficultySelect.disabled = false;
    config.startGameButton.disabled = false;
    config.goBackButton.disabled = false;
    config.guessInput.disabled = true;
    config.guessButton.disabled = true;
    config.hintButton.disabled = true;
    config.wordDisplay.textContent = "";
    config.livesCount.textContent = game.lives;
    config.timerCount.textContent = game.timeLeft;
    config.hangmanDrawing.textContent = "";
    config.message.textContent = "";
    clearInterval(game.timer);
}

export function goBackHelper(resetGame, config) {
    resetGame();
    config.gameScreen.classList.add("hidden");
    config.categorySelection.classList.remove("hidden");
}

export function restartGameHelper(resetGame) {
    resetGame();
}
