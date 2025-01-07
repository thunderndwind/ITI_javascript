// (3) create an array with your favourite movies
// a- copy the array into a different variable
// b- replace the third element with a different movie
// c- return the last array item in 3 different ways
// d- add a new movie to the beggining

var movies = ["None", "Not", "No"];

// a-
var moviesCopy = movies.slice();
// a-


// b-
var moviesLength = movies.length;
movies[moviesLength - 1] = "Replaced :)";
// b-



// c-
var lastItem1 = movies[moviesLength - 1];
var lastItem2 = movies.at( - 1);
var lastItem3 = movies.reverse()[0];
movies.reverse();

console.log('lastItem1', lastItem1);
console.log('lastItem2', lastItem2);
console.log('lastItem3', lastItem3);
// c-


// d-
var newMovie = "New Movie";
movies.unshift(newMovie);
console.log('movies', movies);
// d-
