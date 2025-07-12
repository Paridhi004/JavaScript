/* Strict Equality v/s Loose Equality

Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.

Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer. 
*/

// Bitwise AND (&):-

// Bitwise AND is denoted by '&'. It is used between two numbers, and the bitwise AND operation is performed on each corresponding bit of the two numbers.

// In binary system numbers are represented in 0's and 1's, so bitwise AND(&) will return 1 only when both the corresponding bits are 1 simultaneously else it will return 0.

let num1 = 5;
// Binary representation of 5 : 0 1 0 1

let num2 = 7;
// Binary representation of 7 : 0 1 1 1

console.log(num1 & num2);         // 5

//   0 1 0 1
// & 0 1 1 1
// ans-> 0 1 0 1 which in decimal is 5.



// Bitwise OR (|):-

// Bitwise OR is denoted by '|'. It is used between two numbers, and the bitwise OR operation is performed on each corresponding bit of the two numbers.

// Bitwise OR(|) will return 1 if any one of the corresponding bits is 1, else it will return 0.

let num3 = 5;
// Binary representation of 5 : 0 1 0 1

let num4 = 8;
// Binary representation of 7 : 1 0 0 0

console.log(num1 | num2);         // 13

//   0 1 0 1
// | 1 0 0 0
// ans-> 1 1 0 1 which in decimal is 13.




// Bitwise NOT (~):-

// Bitwise NOT is denoted by '~', it is used on a single number. Bitwise NOT operator inverts all the bits (0 is inverted to 1 and 1 is inverted to 0) of the given number and returns the new number as output.


let num5 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num6 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

let num7 = -8;
// Binary representation of -8 : 1 1 1 1 0 0 0

console.log(~num1);    // -6
console.log(~num2);    // -9
console.log(~num3);    // 7






// Ternary Operators:-

// Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript. It is also known as conditional operator. It has three parts: a condition, statement to execute if the condition is true and the statement to execute if the condition is false.

// Syntax:



//SYNTAX

// (condition) ? (statement1) : (statement2);


let myage = 21;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

// Output : Cannot Drive
//rest read from blog.