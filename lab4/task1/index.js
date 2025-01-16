// 1- Create an array method that calculates the average for an array of numbers.
//     ex: var arr = [1, 2, 3, 4]
//         arr.average() // should return the average
//     Note: Handle validation

// Array.prototype.average =
var arr = [1, 2, 3, 4];

arr.__proto__.average = function () {
    if (this.length === 0) {
        return 0;
    }

    const sum = this.reduce((acc, current) => {
        if (typeof current !== "number" || isNaN(current)) {
            throw new Error(
                "only array of numbers allowed for average method "
            );
        }
        return acc + current;
    }, 0);

    return sum / this.length;
};

try {
    console.log(arr.average());
} catch (error) {
    console.log(error);
}
