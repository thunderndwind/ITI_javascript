// [1] Write a function to calculate the sum of digits in a number

function calculateSumOfDigitsOfNumber(number) {
    checkNumber(number);
    var calculatedSum = getDigitsSum(number);
    return calculatedSum;
}

function checkNumber(number) {
    if (typeof number != "number" || isNaN(number)) {
        throw new Error("excpected number but got " + typeof number);
    }
}

function getDigitsSum(number) {
    return number
        .toString()
        .split("")
        .reduce(function (sum, digit) {
            digit = Number(digit);
            sum = Number.isInteger(digit) ? sum + digit : sum;
            return sum;
        }, 0);
}

console.log(calculateSumOfDigitsOfNumber(123));
