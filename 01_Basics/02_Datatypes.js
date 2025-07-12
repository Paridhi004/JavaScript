"use strict"; // treat all JS code as newer version
//Now-a-days it is done by default but considered good practice to write this.

// alert( 3 + 3) // we are using nodejs, not browser (this syntax support  in browser's console).

console.log(3  //this is wrong practice.
    +
     3) // code readability should be high

console.log("Hitesh")
//Make code readability your priority.


// Primitive Datatypes:-
// Primitive datatypes are those datatypes whose size is fixed at compile time. Memory allocation for primitive datatypes is typically done on the 'Stack'.

//Numbers:- Numbers are used to represent numeric values, which can be integers or floating-point numbers.


// Strings:- In JavaScript, the "Strings" primitive data type represents sequences of characters. Strings are used to store and manipulate textual data, such as words, sentences, or any other sequence of characters. Creation of strings is possible in three ways, we can create a string using double-quotes(""), single-quotes('') and template literals or backticks(``).
// Use "" rather than ''.


// Boolean :- true or false


//undefine -> variable declared but value not defined then the datatype of such variable is undefined. It also serves as the default value of variables that have not been initialized.

//null -> stanalone value in JS. It is a representation of empty value.

let state = "" // this is not null, as we have defined it. It is a string.

let state2 = null 

//symbol => for uniqueness , mostly used during react.

console.log(typeof "hitesh") // string

console.log(typeof null)// object

console.log(typeof undefined) // undefined