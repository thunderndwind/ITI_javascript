// (5) Create a function that takes the following:
//     a- User name using prompt ( required)
//     b- User Grades in one prompt in the format:
//         “90,50,30,10”
//     Welcome the user by Name on console
//     and display grades as table on console
//     after that show the average grade of user’s grades.

function getUserGrades() {
    var isdone = false;

    var userName = getName();

    var grades = getGrades();

    console.log(`Welcome, ${userName}!`);

    console.table(grades);

    var average = getAverageGrades(grades);

    console.log(`Average grade is: ${average.toFixed(2)}`);
}

function getName() {
    var name = prompt("Enter your name:");
    if (name === null || name.trim() === "") throw new Error("Cannot be Empty");

    for (var i = 0; i < name.length; i++) {
        var char = name.charAt(i);
        if (
            !(
                (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") ||
                char === " "
            )
        ) {
            console.error("Name can only contain letters and spaces.");
            return getName();
        }
    }

    return name;
}

function getGrades(params) {
    var gradesInput = prompt("Enter your grades:");
    if (gradesInput === null || gradesInput.trim() === "")
        throw new Error("Grades cannot be empty.");

    var grades = gradesInput.split(",").map(function (grade) {
        var parsedGrade = parseInt(grade.trim());

        if (isNaN(parsedGrade) || parsedGrade < 0 || parsedGrade > 100) {
            console.error(
                "All grades must be valid poitive numbers between 100 and 0."
            );
            return getGrades();
        }
        return parsedGrade;
    });

    return grades;
}

function getAverageGrades(grades) {
    var average = getTotalGrades(grades) / grades.length;
    return average;
}

function getTotalGrades(grades) {
    return grades.reduce(function (sum, grade) {
        sum = sum + grade;
        return sum;
    }, 0);
}

getUserGrades();
