// How to declare it using constructor and create singleton:

const tinderUser = new Object() //singleton object -> Object() is a contructor

//const tinderUser = {} -> Same as above but the only difference is that
// This is not a singleton object while the one above is a singleton object.

console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// objects inside objects:-

const regularUser = { // here,  regularUser -> object , fullname-> object , userfullname-> object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// How to access:
console.log(regularUser.fullname.userfullname.firstname); // hitesh


// Merging / Combining Objects:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//const obj3 = {obj1 , obj2} // not correct as-> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign(obj1 , obj2) // Good way -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Object.assign(obj1 , obj2) -> merges all the values of obj2 into obj1.

const obj3 = Object.assign({} , obj1 , obj2) /* correct way -> {} , an empty array is optional but useful as here {}  
 acts as the target array and obj1 , obj2 acts as  the source whose value is being merged in {} . while before obj1 was
 acting as the target array so , when u have more no. of objects try to use {}. Better Practice.*/
console.log(obj3);

const obj4 = {5: "a", 6: "b"}

// Object.assign() is used less. The most used method:

const obj5 = {...obj1 , ...obj2 , ...obj4} // spread out all the objects then merge it.
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // to access.

//console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] -> an array of keys of object tinderUser is returned.
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ] -> an array of valuess of object tinderUser is returned.
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] -> array inside an array


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks if tinderUser has a property named isLoggedIn or not. if yes -> true else false.


// Destructuring of Objects:

const course = {
     coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//  common way to access:
cource.courseInstructor
course[courseInstructor]

// other good way used by others:

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : Instructor} = course
console.log(Instructor);

// Where ever u see {something inside} -> it denotes destructuring


// Brief Concept of API's:

// Json : Javascrpt object notation

// {
//     "name1": "hitesh",
//     "coursename1": "js in hindi",
//     "price1": "free"
// }


// Sometimes we recieve APIs in the form of arrays and not objects

[
    {},
    {},
    {}
]