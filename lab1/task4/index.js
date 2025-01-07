// (4) Write a function that accept a sentence and return the longest word
// within the input
// Example : 'Web Development Tutorial'
// Output : 'Development'


function getLongestWord(sentence) {
    if (typeof sentence != 'string')
        throw new Error("excpected String but got " + (typeof sentence));
        
    var stringLength  = sentence.length;
    
    if ( stringLength === 0) {
        return '';
    }
    
    var splittedWords = sentence.split(' ');
    var longestWord = splittedWords[0];
    
    for (var index = 1; index < splittedWords.length; index++) {
        var currentWord = splittedWords[index];

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
        
    }

    return longestWord;

}

var longestWordReturned = getLongestWord("Web Development Tutorial");
if (longestWordReturned === '')
    console.log("There is no words");

    
else
    console.log("longest word: ", longestWordReturned );