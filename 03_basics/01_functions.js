function sayMyName(){  // we've created a function.
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName // reference of function
//sayMyName() // execution of function.

function addTwoNumbers(number1 , number2){
     console.log(number1 + number2);
     
}

addTwoNumbers(3 , 4) // 7
addTwoNumbers(3 , "4") // 34

// concept of Arguments and parameters:
// 1. Arguments -> 3 , 4 are arguments. Values passes during function call
//2. Parameters -> number1 , number2 are parameters. Values in the defination of the function.  


// What if I want to save the output from the function?

function addTwoNumbers(number1 , number2){
    //  let result = number1 + number2
    //  return result // Note-> Return statement k baad kuch bhi execute ni hoga

    return number1 + number2
}
const result = addTwoNumbers(3 , 4)
console.log(result);


function loginUserMessage(username){
    if(username === undefined){ // or !username => !undefined
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("Paridhi")); // Paridhi just logged in
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage()); // undefined just logged in -> for this check the condition.

// concept of default value:
function loginUserMessage(username = "Sam"){ // default value used if no value entered by user during function call.
    if(username === undefined){ 
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in `
}