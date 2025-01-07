var hangmanStages = [
    `
    +---+
    |   |
        |
        |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
        |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
    |   |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
   /|   |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
    =========
    `,
];

var words = {
    easy: {
        Animals: ["cat", "dog", "elephant", "lion", "tiger"],
        Movies: ["avatar", "inception", "titanic", "jaws", "frozen"],
        Countries: ["usa", "canada", "mexico", "brazil", "japan"],
    },
    medium: {
        Animals: ["giraffe", "kangaroo", "penguin", "zebra", "dolphin"],
        Movies: ["gladiator", "matrix", "interstellar", "gravity", "shrek"],
        Countries: ["germany", "france", "italy", "spain", "china"],
    },
    hard: {
        Animals: [
            "platypus",
            "octopus",
            "rhinoceros",
            "chameleon",
            "armadillo",
        ],
        Movies: ["parasite", "memento", "whiplash", "arrival", "exmachina"],
        Countries: [
            "switzerland",
            "argentina",
            "australia",
            "indonesia",
            "philippines",
        ],
    },
};

var hints = {
    Animals: {
        cat: "A small domesticated carnivorous mammal.",
        dog: "Man's best friend.",
        elephant: "A large mammal with a trunk.",
        lion: "The king of the jungle.",
        tiger: "A large striped cat.",
    },
    Movies: {
        avatar: "A science fiction film directed by James Cameron.",
        inception: "A movie about dreams within dreams.",
        titanic: "A romantic disaster film.",
        jaws: "A movie about a great white shark.",
        frozen: "A Disney animated film about two sisters.",
    },
    Countries: {
        usa: "A country in North America.",
        canada: "Known for its maple syrup.",
        mexico: "Famous for its tacos and tequila.",
        brazil: "Home to the Amazon rainforest.",
        japan: "Known for sushi and samurai.",
    },
};

var selectedWord = "";
var guessedLetters = [];
var lives = 6;
var timer;
var timeLeft = 30;
var gameActive = false;
var currentCategory = "";

var categorySelection = document.getElementById("category-selection");
var gameScreen = document.getElementById("game-screen");
var wordDisplay = document.querySelector(".word-display");
var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var livesCount = document.getElementById("lives-count");
var timerCount = document.getElementById("timer-count");
var hintButton = document.getElementById("hint-button");
var hangmanDrawing = document.getElementById("hangman-drawing");
var message = document.getElementById("message");
var difficultySelect = document.getElementById("difficulty");
var startGameButton = document.getElementById("start-game");
var goBackButton = document.getElementById("go-back");
var restartButton = document.getElementById("restart-game");

function startGame(category) {
    currentCategory = category;
    categorySelection.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    difficultySelect.disabled = false;
    startGameButton.disabled = false;
}

function initializeGame() {
    var difficulty = difficultySelect.value;
    var wordList = words[difficulty][currentCategory];
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    guessedLetters = [];
    lives = 6;
    timeLeft = 30;
    gameActive = true;
    difficultySelect.disabled = true;
    startGameButton.disabled = true;
    goBackButton.disabled = true;
    updateWordDisplay();
    updateLives();
    startTimer();
    message.textContent = "";
    hangmanDrawing.textContent = hangmanStages[0];
    guessInput.disabled = false;
    guessButton.disabled = false;
    hintButton.disabled = false;
}

function validateInput(inputValue) {
    var lastChar = inputValue.charAt(inputValue.length - 1);
    var charCode = lastChar.charCodeAt(0);
    return (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    );
}

function handleGuess() {
    if (!gameActive) return;
    var guess = guessInput.value.toLowerCase();
    guessInput.value = "";
    if (!guess || guess.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }
    var charCode = guess.charCodeAt(0);
    if (charCode < 97 || charCode > 122) {
        alert("Please enter a valid letter (a-z).");
        return;
    }
    if (guessedLetters.includes(guess)) {
        alert("You already guessed that letter.");
        return;
    }
    guessedLetters.push(guess);
    if (!selectedWord.includes(guess)) {
        lives--;
        updateLives();
        if (lives === 0) endGame(false);
    }
    updateWordDisplay();
    checkWin();
}

function updateWordDisplay() {
    var display = selectedWord
        .split("")
        .map(function (letter) {
            return guessedLetters.includes(letter) ? letter : "_";
        })
        .join(" ");
    wordDisplay.textContent = display;
}

function updateLives() {
    livesCount.textContent = lives;
    hangmanDrawing.textContent = hangmanStages[6 - lives];
}

function checkWin() {
    if (
        selectedWord.split("").every(function (letter) {
            return guessedLetters.includes(letter);
        })
    )
        endGame(true);
}

function endGame(won) {
    gameActive = false;
    clearInterval(timer);
    if (won) {
        message.textContent = "Congratulations! You won!";
        message.style.color = "green";
    } else {
        message.textContent = "Game over! The word was: " + selectedWord;
    }
    goBackButton.disabled = false;
    guessInput.disabled = true;
    guessButton.disabled = true;
    hintButton.disabled = true;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerCount.textContent = timeLeft;
    timer = setInterval(function () {
        timeLeft--;
        timerCount.textContent = timeLeft;
        if (timeLeft <= 0) endGame(false);
    }, 1000);
}

function handleHint() {
    if (!gameActive) return;
    var hintText = hints[currentCategory][selectedWord];
    if (hintText) {
        lives--;
        updateLives();
        alert("Hint: " + hintText);
        if (lives === 0) endGame(false);
    }
}

function resetGame() {
    selectedWord = "";
    guessedLetters = [];
    lives = 6;
    timeLeft = 30;
    gameActive = false;
    difficultySelect.disabled = false;
    startGameButton.disabled = false;
    goBackButton.disabled = false;
    guessInput.disabled = true;
    guessButton.disabled = true;
    hintButton.disabled = true;
    wordDisplay.textContent = "";
    livesCount.textContent = lives;
    timerCount.textContent = timeLeft;
    hangmanDrawing.textContent = hangmanStages[0];
    message.textContent = "";
    clearInterval(timer);
}

function goBack() {
    gameScreen.classList.add("hidden");
    categorySelection.classList.remove("hidden");
    resetGame();
}

function restartGame() {
    resetGame();
}

guessInput.addEventListener("input", function () {
    var inputValue = guessInput.value;
    if (!validateInput(inputValue)) guessInput.value = inputValue.slice(0, -1);
});

guessButton.addEventListener("click", handleGuess);
hintButton.addEventListener("click", handleHint);
startGameButton.addEventListener("click", initializeGame);
goBackButton.addEventListener("click", goBack);
restartButton.addEventListener("click", restartGame);

document.querySelector(".animals").addEventListener("click", function () {
    startGame("Animals");
});
document.querySelector(".movies").addEventListener("click", function () {
    startGame("Movies");
});
document.querySelector(".countries").addEventListener("click", function () {
    startGame("Countries");
});
