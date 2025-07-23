const score = 400
// console.log(score);  400

const balance = new Number(100)
//console.log(balance); [Number: 100]

// console.log(balance.toString().length);

const num = new Number(123.456)
console.log(num.toFixed(2)); //The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places , here 2 --> output is 123.46.
//Fixed number of digits after the decimal

const num2 = new Number(1.23e+5)
console.log(num2.toFixed(2));
// Expected output: "123000.00"


const otherNumber = 123.8934
console.log(otherNumber.toPrecision(4));
//Fixed total number of significant digits(not just after the decimal).

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'));
// converts 1000000 into string with indian standards output --> 10,00,000 
//If en-US then output--> 1,000,000



//+++++++++++++++++++++++Math++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); Mostly used -> 5
// console.log(Math.ceil(4.2)); --> 5
// console.log(Math.floor(4.9)); -->4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // generates a random number between 0 and 1
console.log((Math.random()*10) + 1); // multiplied with 10 to shift 1 digit forward so tha value ranges from 0 to 9 then added 1 so that it ranges from 1 to 9 and not 0 to 9.
console.log(Math.floor(Math.random()*10) + 1); // done math.floor to only take single digit instead of decimal values as well. 



//Trick when you are given a range other than 1 to 9 to 0 to 9
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// + min to start the values from min itself.
// max - min excludes max value so 1 is added.

// min = 1 , max = 5
// Math.random() * (5 - 1) = Math.random() * 4 → gives a number from 0 to <4
// Math.floor(...) gives: 0, 1, 2, or 3
// Add `min` → final output: 1, 2, 3, 4 ❌ (5 is missing)
// that is why 1 is added.


//  With +1: (max - min + 1)
// Now you're scaling Math.random() to cover 5 possible values: 0 to <5

// After Math.floor(...), it gives: 0, 1, 2, 3, or 4

// Add min → final output: 1, 2, 3, 4, 5 ✅