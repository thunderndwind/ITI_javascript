// [2] Write a function to calculate the number of vowels in a string

var vowels = ["a", "e", "u", "i", "o"];

function getVowelsInString(string) {
    checkString(string);

    string = string.toLowerCase();
    // var vowelsNumber = calculateVowels(string);
    // return vowelsNumber;

    var vowelsDictionary = getVowels(string);
    return vowelsDictionary;
}

function checkString(string) {
    if (typeof string != "string" || string.toString().length < 1)
        throw new Error("excpected String but got " + typeof string);
}

function calculateVowels(string) {
    return string.split("").reduce(function (numberOfVowels, character) {
        numberOfVowels =
            vowels.indexOf(character) !== -1
                ? numberOfVowels + 1
                : numberOfVowels;
        return numberOfVowels;
    }, 0);
}

function getVowels(string) {
    return string.split("").reduce(
        function (vowelsDictionary, character) {
            if (vowels.indexOf(character) !== -1) vowelsDictionary[character]++;
            return vowelsDictionary;
        },
        {
            a: 0,
            e: 0,
            i: 0,
            o: 0,
            u: 0,
        }
    );
}

var string = "asedAfuoi";

console.log(getVowels(string));
