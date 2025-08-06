const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] , here marvel_heros treats dc_heros as another data/object so complete array is pushed instead of its element.

//marvel_heros[3][1] //-> Flash

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] -> here the elements are concatenated.

const all_new_heros = [...marvel_heros, ...dc_heros] // better way to concatenate arrays as here more than two arrays can be concatenated.const all_new_heros = [...marvel_heros, ...dc_heros , ...array3 , ...array4 and so on] 
 console.log(all_new_heros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
// expected output:  [0, 1, 2,[3, [4, 5]]] by default when depth not specified -> the depth is taken as 1.

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, [4, 5]]

console.log(arr2.flat(3)); //or arr2.flat(infinity)
// expected output: Array [0, 1, 2, 3, 4, 5]


console.log(Array.isArray("Hitesh")) // checks if "Hitesh" is an array or not -> here, returns false.
console.log(Array.from("Hitesh")) //This method this used to convert any object / string into array -> Output: [ 'H', 'i', 't', 'e', 's', 'h' ]


//  What is Array.from()?
// Array.from() is a method used to create a new array from:
// an iterable (like a string, Set, Map, etc.)
// or an array-like object (has a length and numeric keys)

console.log(Array.from({name: "hitesh"})) // interesting


//Array.from({ name: "hitesh" });
// You’re passing an object with no length and no numeric keys.

// 🔍 What JavaScript expects:

// Array.from(arrayLike, mapFn?, thisArg?)
// arrayLike: an object with a length property and indexed elements (0, 1, 2, ...)

// OR an iterable (like a string, array, set)

// Your object:

// { name: "hitesh" }
// Is not iterable

// Doesn't have a length property

// So JavaScript internally treats the length as undefined → 0

// ✅ What Actually Happens?

// Array.from({ name: "hitesh" }) // → []
// No error — but it returns an empty array [], because:
// JS checks for length → not found → defaults to 0

// So it creates an array of length 0 → nothing to fill

// ✅ Example That Works:

// Array.from({ length: 3 }) 
// // → [undefined, undefined, undefined]

// Array.from("hitesh")
// // → ['h', 'i', 't', 'e', 's', 'h']

// 💡 Key Rule:
// Array.from(obj) will only work if obj is iterable or has a length property with numeric keys.
// Your object { name: "hitesh" } doesn’t meet those requirements, so it returns an empty array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*🔍 What is Array.of()?
Array.of() creates a new array from the arguments you pass to it.

📌 Syntax:
Array.of(element1, element2, ..., elementN)

✅ Output:
Your code will output:
[100, 200, 300]

🧠 Why Use Array.of() Instead of new Array()?
Because new Array() behaves weirdly if you pass a single number:

new Array(3) // creates an empty array of length 3 → [ <3 empty items> ]
Array.of(3)  // creates [3]
So Array.of() gives consistent, predictable behavior.
 */




/* Can I use Array.from() here instead of Array.of()?

✅ The short answer:
Yes, you can, but not directly like Array.from(score1, score2, score3) — because Array.from() takes only one main input, and optionally a map function.

So if you want to use Array.from() here, you need to pass your values in an iterable structure, like an array:

console.log(Array.from([score1, score2, score3])); // ✅ [100, 200, 300]

This works because [score1, score2, score3] is an array (an iterable), and Array.from() will convert it into... another array.

Kind of redundant in this case, but yes — it's valid.

🚫 This won't work:
Array.from(score1, score2, score3) 
// ❌ Invalid — score1 is a number, not iterable
// ❌ TypeError: score1 is not iterable
 */