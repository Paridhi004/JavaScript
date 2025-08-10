/*There are two ways of declaring objects -> 1: Literals , 2:Constructor

Singleton -> when object declared using constructors , singleton is formed.
  when declared using Literals -> No singleton formed.
*/

// Object Literals:-
Object.create // using contructor.

const JsUser = { // object created. -> here we have key and value pair
      name: "hitesh",
      "full name": "Histesh Chaudhary",
      age:18,
      location:"Jaipur",
      email:"hitesh@google.com",
      isLoggedIn: false,
      lastLoginday: ["Monday" , "Saturday"]
} 
//here name , age , i.e. all the keys are tracked as string -> name = "name"

console.log(JsUser.email);
console.log(JsUser["email"]); // This method is useful when u have some key value pair like this: "full name": "Hitesh Chaudhary"
// In such cases it is not possible to access using dot operator.

console.log(JsUser["full name"]);
// console.log(JsUser."full name"); -> Gives error.


// How to declare a symbol:

const mySym = Symbol("key1")

const JsUser2 = { 
      name: "hitesh",
      "full name": "Histesh Chaudhary",
     
      //mySym : "myKey1", // this method is not correct as here , mySym is considered as string and not as symbol
      //If you access it using JsUser2.mySym -> it'll give u the correct ans but the typeof JsUser2.mySym return string instead of Symbol
      
      [mySym]:"myKey1", // correct way
      age:18,
      location:"Jaipur",
      email:"hitesh@google.com",
      isLoggedIn: false,
      lastLoginday: ["Monday" , "Saturday"] // creating array inside object .
}

console.log(JsUser2[mySym]); // correct way to access symbol.


// Basic Things:

JsUser2.email = "hitesh@chatgpt.com" // changing a value
Object.freeze(JsUser2) // To freeze the value so that it can't be changed.
JsUser2.email = "hitesh@microsoft.com" // This won't change the email as JsUser is frozen.
console.log(JsUser2);
// Output:-

// {
//   name: 'hitesh',
//   'full name': 'Histesh Chaudhary',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginday: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'myKey1' --------------------> Imp
// }



// Creating a function in object.

JsUser.greeting = function(){
    console.log("Hello JS User!");
}

console.log(JsUser.greeting); // Output is : [Function (anonymous)] -> This nmeans the function
// has not executed , we've recieved only its reference.
console.log(JsUser.greeting()); // this actually executes the function

JsUser.greeting2 = function(){
    console.log(`Hello JS User , ${this.name}`); // refereing objects's property using this
}
console.log(JsUser.greeting2());
