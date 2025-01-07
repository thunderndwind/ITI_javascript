// [3] Write a function to calculate the number of occurances of a character in a string

function getCharacterOccurance(string, characterToFind) {
    checkCharacter(characterToFind);
    checkString(string);

    var occuracneNumber = calculateOccurance(string, characterToFind);

    return occuracneNumber;
}

function checkString(string) {
    if (typeof string != "string" || string.toString().length < 1)
        throw new Error("excpected String but got " + typeof string);
}

function checkCharacter(character) {
    if (character.toString().length != 1)
        throw new Error("excpected one character ");
}

function calculateOccurance(string, characterToFind) {
    return string.split("").reduce(function (occurances, character) {
        occurances =
            character === characterToFind ? occurances + 1 : occurances;
        return occurances;
    }, 0);
}

var string = "abcdeafga";
var character = "a";

console.log(getCharacterOccurance(string, character));
