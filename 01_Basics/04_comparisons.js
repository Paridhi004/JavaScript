// BASIC COMPARISONS:-

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Comparison with different datatypes-> Not at all recommended as they give unpredictable output.
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //-> false
console.log(null == 0); // ->false
console.log(null >= 0); // is true

//Reason: equality check and comparisons ( > , < , <= , >=) work differently. The comparison convert num into a number , treating it as 0 so that is why num >= 0 gives true.

console.log(undefined == 0); //-> false
console.log(undefined > 0); // -> false
console.log(undefined < 0); // -> false
console.log(undefined == null); // -> true due to loose equality.

// the comparison operators convert undefined to number (NaN) , that is why it returns false.
// When comparing undefined == 0, JavaScript does not convert undefined to a number (== -> loose equality). 
//Any relational comparison (<, >, <=, >=) involving NaN always returns false.

// === 

console.log("2" === 2); //-> === checks datatype as well as the value while == only checks for value. ("2" == 2 is true)


//✅ == (Loose equality):-
    // Checks for equality of values after performing type coercion if the types are different.

    // JavaScript tries to convert (coerce) the values to a common type before comparing.

//✅ === (Strict equality)
    // Checks for equality of both value and type.

    // No type conversion; both sides must have the same type and value.