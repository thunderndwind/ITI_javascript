export function startTimerHelper(game, config) {
    clearInterval(game.timer);
    game.timeLeft = 10;
    config.timerCount.textContent = game.timeLeft;
    game.timer = setInterval(function () {
        game.timeLeft--;
        config.timerCount.textContent = game.timeLeft;
        if (game.timeLeft <= 0) {
            if (game.lives > 1) game.lives--;
            else {
                game.lives--;
                game.endGame(false);
                game.updateLives();
                return;
            }
            game.timeLeft = 10;
        }
        game.updateLives();
    }, 1000);
}

export function restartTimerHelper(game) {
    game.startTimer();
}
