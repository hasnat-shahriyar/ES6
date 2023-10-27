// Comparing two primitive values
const a = 2;
const b = 2;

if (a === b) {
    console.log("They are the same");
} else {
    console.log("They are different");
}

// Output: They are the same

// In this case, the values of 'a' and 'b' are both 2, which is a primitive type. 
// When you compare primitive values like numbers using '===', it checks if their values are identical, so they are considered the same.

// Comparing two objects
const first = { a: 2 };
const second = { a: 2 };

if (first === second) {
    console.log("They are the same");
} else {
    console.log("They are different");
}

// Output: They are different

// In this case, 'first' and 'second' are two different objects. 
// Even though they have the same property and value, they are distinct objects with separate references in memory.
// When you use '===' to compare objects, it checks if the references to the objects are the same, and in this case, they are not, so they are considered different.
