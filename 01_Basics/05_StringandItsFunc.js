const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");


//Diff ways to create a string:
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation -> Best Method to concatenate string.

const gameName = new String('hitesh-hc-com') // another way to declare strings -> using new keyword.We're already telling Js that it's a string

 console.log(gameName[0]); // to access the character present at index 0.

 // console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());

 //Two ways to access an  individual character in a string.

 console.log("cat".charAt(1)); // func for character access

 console.log("cat"[1]) // treat the string as an array-like object, where individual characters correspond to a numerical index


 //Note:-  all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


console.log(gameName.at(0)); // return a character and also accepts -ve indices , which count back from the last string character..

console.log("Hello".concat(" ", "World")); // prints Hello World . This Func concatenates the string arguments to "Hello" string here and returns a new string. 

str0.concat(str1, str2, /* …, */ strN)

string.endsWith(searchString, length)

//searchString: The substring you want to check.

// length (optional): If provided, it treats the string as if it were only that many characters long.

const str1 = "Cats are the best!";
console.log(str1.endsWith("best", 17)); // returns true

console.log(gameName.indexOf('t')); //searches this string and returns the index of the first occurrence of the specified substring.

indexOf(searchString, position)
//The method returns the index of the first occurrence of the specified substring at a position less than or equal to position

//If position is less than zero, the method behaves as it would if position were 0.
//If position is greater than the length of the calling string, the method doesn't search the calling string at all. returns -1.

console.log(gameName.indexOf(searchstring , position));// returns -1 if not found.


const anotherString = gameName.slice(-8, 4)
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

slice(indexStart)
slice(indexStart, indexEnd)
//It takes -ve indices.

console.log(gameName.split('-'));
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "Saturday night plans";
console.log(str.startsWith("Sat"));

const newString = gameName.substring(0, 4)
console.log(newString);//returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const stringObj = new String("foo");
console.log(stringObj.toString());

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
replace(pattern, replacement) //If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.



console.log(url.includes('sundar'))
