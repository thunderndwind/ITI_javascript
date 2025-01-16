import { startTimerHelper, restartTimerHelper } from "./timer.js";
import {
    updateWordDisplayHelper,
    startGameHelper,
    initializeGameHelper,
    endGameHelper,
    updateLivesHelper,
    checkWinHelper,
    handleHintHelper,
    resetGameHelper,
    goBackHelper,
    restartGameHelper,
} from "./controllers.js";

import { handleGuessHelper } from "./guess.js";

export class Game {
    constructor(config) {
        this.selectedWord = "";
        this.guessedLetters = [];
        this.lives = 6;
        this.timer;
        this.timeLeft = 10;
        this.gameActive = false;
        this.currentCategory = "";
        this.difficulty = "";
        this.wordList = [];
        this.config = config;
    }

    startGame = (category) => startGameHelper(this, category, this.config);

    initializeGame = () => initializeGameHelper(this, this.config);

    resetGame = () => resetGameHelper(this, this.config);

    restartGame = () => restartGameHelper(this.resetGame);

    goBack = () => goBackHelper(this.resetGame, this.config);

    endGame = (won) => endGameHelper(this, won, this.config);

    startTimer = () => startTimerHelper(this, this.config);

    restartTimer = () => restartTimerHelper(this);

    handleGuess = () => handleGuessHelper(this, this.config);

    updateWordDisplay = () => updateWordDisplayHelper(this, this.config);

    updateLives = () => updateLivesHelper(this, this.config);

    checkWin = () => checkWinHelper(this);

    handleHint = () => handleHintHelper(this, this.config);
}
