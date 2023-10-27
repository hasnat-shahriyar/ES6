// Keys, values, entries, delete, seal, freeze

const bottle = {
    Product : "Water",
    Price : 200,
    Quantity : "500 ml",
    Mineral : true,
}
// Keys
const keys = Object.keys (bottle);
console.log (keys);
// Values
const values = Object.values(bottle);
console.log (values);
// Entries
const pair = Object.entries (bottle);
console.log (pair);
// Delete
delete bottle.Mineral;
console.log(bottle);
// Seal
Object.seal(bottle);
delete bottle.Quantity;
console.log(bottle);