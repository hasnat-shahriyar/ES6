const first = 2;      // Initialize a variable 'first' with the value 2.
const second = 2;     // Initialize a variable 'second' with the value 2.
const third = "2";   // Initialize a variable 'third' with the string "2".

// Comparing 'first' and 'second' using strict equality (===).
if (first === second) {
    console.log("values are equal");  // This block will be executed because 2 is equal to 2.
} else {
    console.log("values are not equal");
}

// Comparing 'second' and 'third' using strict equality (===).
if (second === third) {
    console.log("values are equal");
} else {
    console.log("values are not equal");  // This block will be executed because 2 is not strictly equal to "2" (different data types).
}
// Comparing 'second' and 'second' using loose equality (==).
if (second == second) {
    console.log("values are equal");  // This block will be executed because 2 is loosely equal to 2.
} else {
    console.log("values are not equal");
}

// Type Coercion: In the second 'if' statement, JavaScript attempts to convert 'third' to a number for comparison.
// Type Conversion: This refers to the automatic conversion of data types by JavaScript during operations like the one in the second 'if' statement.
// Type Casting: In the second 'if' statement, JavaScript is casting the string "2" to a number for comparison.

