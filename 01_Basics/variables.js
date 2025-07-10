const amountId = 12345
let amountEmail = "Paridhi@gmail.com"
var amountPassword = "212201"
amountcity = "Delhi" //we can also delare a variable like this but not at all recommended.

let amountState; // while printing it gives undefined so anything that does not have a value is undefine.

//amountId = 1209 // Not allowed

console.log(amountId);

amountEmail = "Rastogi156@gmail.com"
amountPassword = "34567"
amountcity = "Jaipur"
console.table([amountEmail , amountPassword , amountcity  , amountState])



/*
Prefer not to use var
because of issue in block scope and functional scope.

Variables declared with var are not limited to blocks like if or for; instead, they belong to the whole function they’re in, or the global scope if they’re outside any function.

The declaration is moved to the top of their scope — so they can be used before they’re actually written in the code. This can sometimes cause confusing bugs.
*/


/*
Constants declared with const must be initialized with a value. Unlike variables declared with var or let, which can be declared without immediately assigning a value, const requires initialization at the time of declaration.
 */