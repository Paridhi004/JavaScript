
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


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


//Implicit Type Conversion:-

// console.log( (3 + 4) * 5 % 3);

console.log(+true);// -> 1 (converted to number)
console.log(+""); //-> 0
//Let expr be the result of evaluating UnaryExpression.
//Return ToNumber(GetValue(expr)).


let nums1, nums2, nums3
nums1 = nums2 = nums3 = 2 + 2 //not considered good

let gameCounter = 100
++gameCounter; // increment operator
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// ✅ a) When using + operator with a string

    // If either operand is a string, JavaScript converts the other to a string and performs concatenation.

    // '5' + 1         // '51'   (1 → '1')
    // true + '3'      // 'true3'
    // null + '5'      // 'null5'



console.log("1" + 2); //-> 12 (conversion to string)
console.log(1 + "2");// -> 12
console.log("1" + 2 + 2);// -> 122
// reason-> "1" + 2 => string + number -> concatenation so 2 converted to string then "12" + 2 again same thing (concatenation)
console.log(1 + 2 + "2");// -> 32
// reason-> 1+2 => number + number -> normal addition thein 3 + "2" -> number + string => concatenation.


// ✅ b) When using other arithmetic operators (-, *, /)

    // JavaScript tries to convert operands to numbers.


    // '5' - 1         // 4   ('5' → 5)
    // '5' * 2         // 10  ('5' → 5)
    // true * 3        // 3   (true → 1)
    // false + 10      // 10  (false → 0)
    // null + 1        // 1   (null → 0)
    // undefined + 1   // NaN (undefined → NaN)


// ✅ c) Comparisons (<, >, <=, >=)

    // JavaScript generally converts both sides to numbers (except when both are strings: then it compares lexicographically).


    // '5' < 10        // true   ('5' → 5)
    // '5' > '10'      // true   (compares as strings → '5' > '1')
    // null >= 0       // true   (null → 0, so 0 >= 0)
    // undefined > 0   // false  (undefined → NaN, and NaN > anything → false)