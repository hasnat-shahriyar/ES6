// Primitive Vs Reference

// Primitive Example:
let x = 5; // 'x' is assigned the primitive value 5
let y = 6; // 'y' is assigned the primitive value 6

x = y; // 'x' now holds the value of 'y' (6)
y = 7; // 'y' is updated to 7

console.log(x); // Output: 6 (because 'x' was assigned the value of 'y')
console.log(y); // Output: 7

// Reference Example:
let a = ["JS", "Python"]; // 'a' is assigned an array (reference type)
let b = ["HTML", "CSS"]; // 'b' is assigned a different array

b = a; // 'b' now holds the reference to the same array as 'a'

console.log(a); // Output: ["JS", "Python"] (unchanged)
console.log(b); // Output: ["JS", "Python"] (both 'a' and 'b' reference the same array)

a.push("Go"); // Modifying the array through variable 'a'
console.log(a); // Output: ["JS", "Python", "Go"] (array modified via 'a')
console.log(b); // Output: ["JS", "Python", "Go"] (since 'a' and 'b' reference the same array, both reflect the change)
