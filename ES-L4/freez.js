// Define an object called 'bottle'
const bottle = {
    Product: "Water",
    Price: 200,
    Weight: "500 ml",
    Mineral: true,
};

// Object.keys() method - Get an array of property keys
const keys = Object.keys(bottle);
console.log(keys); // Output: ["Product", "Price", "Weight", "Mineral"]

// Object.values() method - Get an array of property values
const values = Object.values(bottle);
console.log(values); // Output: ["Water", 200, "500 ml", true]

// Object.entries() method - Get an array of key-value pairs (entries)
const pair = Object.entries(bottle);
console.log(pair);
// Output: 
// [
//    ["Product", "Water"],
//    ["Price", 200],
//    ["Weight", "500 ml"],
//    ["Mineral", true]
// ]

// Delete the 'Mineral' property from the 'bottle' object
delete bottle.Mineral;
console.log(bottle);
// Output: { Product: "Water", Price: 200, Weight: "500 ml" }

// Object.seal() method - Seal the 'bottle' object to prevent adding or deleting properties
Object.seal(bottle);
delete bottle.Weight; // Deleting a property (doesn't work)
bottle.Quantity = 1; // Adding a property (doesn't work)
console.log(bottle);
// Output: { Product: "Water", Price: 200, Weight: "500 ml" }

// Object.freeze() method - Freeze the 'bottle' object to make it completely immutable
Object.freeze(bottle);
// Attempt to modify the 'Price' property (doesn't work, no change)
bottle.Price = 250;
console.log(bottle);
// Output: { Product: "Water", Price: 200, Weight: "500 ml" }
