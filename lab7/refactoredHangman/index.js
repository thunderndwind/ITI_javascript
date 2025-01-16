import * as config from "./utils/config.js";
import { validateInput } from "./utils/validators.js";
import { Game } from "./utils/game.js";

const game = new Game(config);

// Add Listeners and Controllers
config.guessInput.addEventListener("input", function () {
    var inputValue = config.guessInput.value;
    if (!validateInput(inputValue))
        config.guessInput.value = inputValue.slice(0, -1);
});

document.querySelector(".animals").addEventListener("click", function () {
    game.startGame("Animals");
});

document.querySelector(".movies").addEventListener("click", function () {
    game.startGame("Movies");
});

document.querySelector(".countries").addEventListener("click", function () {
    game.startGame("Countries");
});

config.guessButton.addEventListener("click", game.handleGuess);
config.hintButton.addEventListener("click", game.handleHint);
config.startGameButton.addEventListener("click", game.initializeGame);
config.goBackButton.addEventListener("click", game.goBack);
config.restartButton.addEventListener("click", game.restartGame);
