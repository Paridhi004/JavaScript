// JavaScript is a dynamically typed language, meaning that the type of a variable is determined at runtime based on the value assigned to it. Unlike statically typed languages, where variable types are explicitly declared and cannot change, JavaScript allows variables to hold values of different types during execution.

// For example:

// let a = 10; // Initially a number
// a = "Hello"; // Now a string
// a = true; // Now a boolean
// This flexibility is a hallmark of dynamic typing, as the type of a changes based on the assigned value.

// Key Characteristics of Dynamic Typing in JavaScript

// No Type Declaration: Variables are not bound to a specific type. You can assign any type of value to a variable without restrictions.

// Runtime Type Assignment: The type of a variable is determined dynamically during code execution.

// Reassignable Types: Variables can be reassigned to hold values of different types without causing errors.

// Advantages

// Dynamic typing simplifies coding by removing the need to declare types explicitly. Developers can quickly assign and reassign values without worrying about type constraints.

// Challenges

// This flexibility can lead to potential errors. For instance:

// function greet(name) {
// console.log("Hello, " + name);
// }

// greet("John"); // Works fine
// greet(42); // Outputs: "Hello, 42"
// Here, the function greet expects a string, but passing a number does not raise an error. Such issues can make debugging difficult, especially in large codebases.


//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // type is undefined
//let userEmail = undefined; line 44 and 45 are same.
const id = Symbol('123') // used to create unique values.
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object ------> (Important)
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint -----> used to store large numbers.

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (object function)
//        Object  =>  object




// ✅ Primitive vs Reference variables in JavaScript
// 📦 Primitive types
// These hold simple, immutable values.

// Examples:
// Number, String, Boolean, null, undefined, Symbol, BigInt

// Characteristics:

// Stored directly in the variable.

// When you assign or copy a primitive, the value itself is copied.

// Two variables holding the same primitive value are completely independent.

// Example:

// let a = 10;
// let b = a;   // b gets a copy of a's value

// a = 20;      // change a
// console.log(b); // still 10
// Changing a doesn’t affect b because they hold separate copies.

// 📦 Reference types
// These store references (addresses) to objects in memory.

// Examples:
// Object, Array, Function, Date, RegExp (and anything else that’s not a primitive)

// Characteristics:

// The variable doesn’t hold the object itself; it holds a reference (think: pointer) to it.

// When you assign or copy a reference variable, you copy the reference (i.e., the address), not the actual object.

// Two variables can reference the same object, so changes through one variable affect the object seen by the other.

// Example:

// let obj1 = { name: "Alice" };
// let obj2 = obj1;   // obj2 now references the same object as obj1

// obj1.name = "Bob";

// console.log(obj2.name); // "Bob"
// Both obj1 and obj2 point to the same object.