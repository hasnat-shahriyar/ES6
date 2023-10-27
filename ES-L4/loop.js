// Loop through an object using for in, for of, object entries

// Loop through an array using 'for of'
const numbers = [10, 12, 14, 16, 18, 20];
for (const number of numbers){
    console.log(number); // Print each number in the 'numbers' array
}

// "for of" cannot be used with objects; it's used for iterating over iterable values, like arrays.

const bottle = {
    Product: "Water",
    Price: 200,
    Weight: "500 ml",
    Mineral: true,
};

// Option 1: To loop through an object, get its keys and then use 'for of' on the keys
const keys = Object.keys(bottle); // Get an array of the object's keys
for (const key of keys){
    console.log(key); // Print each key in the 'keys' array, which are the property names of the 'bottle' object
}

console.log(""); // Print an empty line for separation

// "for in" loop - used for iterating over the properties of an object
for (const key in bottle){
    console.log(key); // Print each property name in the 'bottle' object
}
