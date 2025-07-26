// Dates

let myDate = new Date() // creating an instance of object
//Different ways to Convert date into readable format:-
console.log(myDate.toString()); //Sat Jul 26 2025 11:31:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat Jul 26 2025
console.log(myDate.toLocaleString());//7/26/2025, 11:31:10 AM  --> Time also included.
console.log(myDate.toJSON()); //2025-07-26T11:34:35.713Z
console.log(myDate.toISOString());//2025-07-26T11:34:35.713Z
console.log(typeof myDate); //Date is an object.

//+++++++++++++++Diff Ways of Creating Date++++++++++++++


// let myCreatedDate = new Date(2023, 0, 23)--> here month starts from 0 as it's an array.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) --> 5 , 3 are Timestamps.
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


//Timestamp -> used whe creating quizes , polls, etc.
let myTimeStamp = Date.now()//-> This gives us the current Timestamp.
console.log(myTimeStamp); // Output -> 1753524487789 -> This is Time in milli sec from the date 1 Jan , 1970.

console.log(myCreatedDate.getTime());// this converts my Date in to Time like above format. Useful when u wwant to compare times.

console.log(Date.now()/1000)//--> To conver time in ms to sec. But here the value also has decimal points , to remove that Math.floor or Math.round is used.

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// 1 is added as here month starts from 0.
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})// If you want to customise your date. Here default is Internationalisation value.


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date