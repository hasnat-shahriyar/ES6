// Arguments : Function arguments pass by reference pass by value
// This is a JavaScript function called 'sum' that takes three arguments 'a', 'b', and 'c'.
// The function also uses the 'arguments' object to access all passed arguments, even if they are not explicitly defined.
function sum(a, b, c) {
    // Logging the 'arguments' object to show all passed arguments.
    console.log(arguments);

    // Using the spread operator to convert the 'arguments' object into an array for easier manipulation and logging.
    const arg = [...arguments];
    console.log(arg);

    // Calculating the sum of 'a', 'b', and 'c'.
    const result = a + b + c;

    // Returning the result.
    return result;
}

// Calling the 'sum' function with 6 arguments.
const total = sum(5, 10, 15, 20, 25, 30);

// Logging the total sum to the console.
console.log(total);

// Creating two objects, 'person1' and 'person2', representing two couples with 'name' and 'partner' properties.
let person1 = { name: "Hasnat", partner: "Nusrat" };
let person2 = { name: "Shahriyar", partner: "Sara" };

// Logging the initial state of 'person1' and 'person2' objects.
console.log(person1, person2);

// This is a function 'NameChange' that takes two objects ('couple1' and 'couple2') as arguments.
function NameChange(couple1, couple2) {
    // Modifying the 'name' and 'partner' properties of 'couple1'.
    couple1.name = "Nahin";
    couple1.partner = "Mim";

    // Modifying the 'partner' property of 'couple2'.
    couple2.partner = "Jahan";
}

// Calling the 'NameChange' function with 'person1' and 'person2' as arguments.
NameChange(person1, person2);

// Logging the updated state of 'person1' and 'person2' objects to show the changes made by the 'NameChange' function.
console.log(person1, person2);
