// let score = 33 // number

let score = "33"
//to convert this into number:-

let valueInNumber = Number(score); // string converted to number.
console.log(typeof valueInNumber);


// score = null ->  0
//score = undefined ->  NaN (Not a Number)
//score = "33abc" -> NaN.
// "" -> 0
//anything that can't be converted into number becomes NaN.
//score = true/false -> after converting it becomes 1/0 respectively.


let num = NaN
let Boolnum = Boolean(num)
console.log(Boolnum);

// 1 and any non zero no. -> true , 0-> false
// [empty string] ""-> false , " [any non empty string] hhbdsh"-> true
// null , undefined , NaN -> false

let num2 = 123
let stringvalue = String(num2)
console.log(stringvalue);
console.log(typeof stringvalue); // string

// null , undefined and everything -> just converted into string.


//Check out the Conversion table from w3School
// link:- https://www.w3schools.com/js/js_type_conversion.asp