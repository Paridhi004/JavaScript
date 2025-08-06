// array -> JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, "name")
console.log(myArr2);


//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//JavaScript array-copy operations create shallow copies. 
/*A shallow copy means:

You copy the outer structure,

But the inner parts (like arrays or objects inside) are shared.

So if you change something inside, it affects both the original and the copied version.*/

let original = [[1, 2], [3, 4]];

// Shallow copy
let copy = original.slice(); // or [...original]

// Change copy
copy[0][0] = 99;

// Original is also changed!
console.log(original[0][0]); // prints 99

/*For a 1D array, a shallow copy:

Works just fine.

Since it contains primitive values (like numbers), a shallow copy creates a true copy.

Changes to one array do not affect the other.

Why? Because primitive values (like int, number) are copied by value, not by reference. */

let original2 = [1, 2, 3];

// Shallow copy
let copy2 = original2.slice(); // or [...original]

// Modify copy
copy2[0] = 99;

// Original remains unchanged
console.log(original2[0]); // prints 1


// myArr.unshift(9) 
// console.log(myArr);
 //The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]


// myArr.shift() -> The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

 myArr.includes(9) //->The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(myArr.indexOf(3));

const newArr = myArr.join() //->The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(" "));
// Expected output: "Fire Air Water"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"





// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1); // -> [ 0, 1 ] {last index is exclusive}
console.log("B ", myArr);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


//+++++++++++++++++++++Diff B/w Splice() and Slice()+++++++++++++++++++++++++++

// 🧪 1. slice()
// ➕ Purpose:
// 🔹 Returns a copy of a portion of an array
// 🔹 Does not modify the original array

// ✅ Syntax:

// array.slice(start, end)
// start: index to begin extraction (inclusive)

// end: index to stop (exclusive)

// ✅ Example:

// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.slice(1, 4);
// console.log(sliced); // [2, 3, 4]
// console.log(arr);    // [1, 2, 3, 4, 5] → original unchanged


// 🧪 2. splice()
// ➕ Purpose:
// 🔹 Changes the original array
// 🔹 Can add, remove, or replace elements

// ✅ Syntax:

// array.splice(start, deleteCount, item1, item2, ...)
// start: index at which to start changing

// deleteCount: how many elements to remove

// item1, item2, ...: elements to add (optional)

// ✅ Example:

// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(1, 2); // remove 2 elements starting at index 1

// console.log(removed); // [2, 3]
// console.log(arr);     // [1, 4, 5] → original modified

// 🔁 Replace Example:

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 99); // remove 1 item at index 2, add 99

// console.log(arr); // [1, 2, 99, 4, 5]

myArr.reverse() 
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array

myArr.sort()
//The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending