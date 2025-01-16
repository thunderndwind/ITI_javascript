// 2- When trying to convert an object to string, the output is always '[object object]'.
//   a- Change the default output for all objects to be 'This is an object'.
//     ex:
//         var obj = {};
//         String(obj); // Output: 'This is an object'.

//   b- Make String(obj) of only the following object return the content of the message while the all other objects still return 'This is an object'.
//         var obj = { message: 'This is a message' };
//         String(obj) // Output: 'This is a message'.

Object.prototype.toString = function () {
    return "This is an object";
};

var obj1 = {};
var obj2 = { message: "This is a message" };

obj2.toString = function () {
    return this.message;
};

console.log(String(obj1));
console.log(String(obj2));
