export const categorySelection = document.getElementById("category-selection");
export const gameScreen = document.getElementById("game-screen");
export const wordDisplay = document.querySelector(".word-display");
export const guessInput = document.getElementById("guess-input");
export const guessButton = document.getElementById("guess-button");
export const livesCount = document.getElementById("lives-count");
export const timerCount = document.getElementById("timer-count");
export const hintButton = document.getElementById("hint-button");
export const hangmanDrawing = document.getElementById("hangman-drawing");
export const message = document.getElementById("message");
export const difficultySelect = document.getElementById("difficulty");
export const startGameButton = document.getElementById("start-game");
export const goBackButton = document.getElementById("go-back-button");
export const restartButton = document.getElementById("restart-game");

export const hangmanStages = [
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

export const words = {
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

export const hints = {
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
