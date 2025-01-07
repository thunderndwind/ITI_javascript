// (1) write JavaScript function that checks whether the passed string is a palindrome or not
//     Note: handle possible test cases


function isPalindrome(str){

    if (typeof str != 'string')
        throw new Error("excpected String but got " + (typeof str));
        
    var stringLength  = str.length;
    
    if ( stringLength <= 1) {
        return true;
    }
    
    return str === str.split('').reverse().join('');
};

try {
    console.log(isPalindrome(1));
    
} catch (error) {
    console.log(error )
}

