// situation when you do not know no. of arguments passed by the user -> Shopping cart

function calculateCartPrice1(num1){
      return num1
}
console.log(calculateCartPrice1(200 , 300 , 400)); // 200
// here , the problem is that only 200 is taken rest are ignored by the function. To handle this we use 
// Rest operator(...) -> At different places also called Spread operator.

function calculateCartPrice(...num1){
      return num1
}
console.log(calculateCartPrice(200 , 300 , 400)); //[ 200, 300, 400 ] -> an array is returned.


// Rest Operator(...)
// What it does:
// Gathers remaining arguments (or elements/properties) into an array.
// Mainly used in function parameters, array destructuring, and object destructuring.

// Spread Operator (...)
/* What it does:
  ->Spreads out elements of an array, object, or iterable into individual items.
  ->Used for copying, merging, and passing arguments to functions.

  // Pass as function arguments
   const numbers = [4, 7, 2];
   console.log(Math.max(...numbers)); // 7
 */

function calculateCartPrice3(val1 , val2, ...num1){
      return num1
}
console.log(calculateCartPrice3(200 , 300 , 400 , 360)); // val1 = 200 , val2 = 300 , num1 = [400 , 350]


// Functions with Objects:-

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){ // here we've made a generic function using anyobject as parameter.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // Username is hitesh and price is 199
handleObject({ // Directly created an object in argument.
    username: "sam",
    price: 399
}) // Username is sam and price is 399


// Functions with arrays:

const myNewArray = [200 , 300 , 100 , 600]
function returnSecondValue(getArray){ // Used a generic name.
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));