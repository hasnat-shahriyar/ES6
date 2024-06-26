const phones = [
  { brand: "Samsung", price: 35000, color: "Black" },
  { brand: "Apple", price: 120000, color: "Silver" },
  { brand: "Xiaomi", price: 25000, color: "Blue" },
  { brand: "Oppo", price: 30000, color: "Green" },
  { brand: "Vivo", price: 28000, color: "Red" },
  { brand: "Realme", price: 22000, color: "Yellow" },
  { brand: "Huawei", price: 45000, color: "White" },
  { brand: "OnePlus", price: 55000, color: "Gray" },
  { brand: "Nokia", price: 15000, color: "Black" },
  { brand: "Motorola", price: 27000, color: "Purple" },
];

// Example using map to create an array of phone brands
const gettingPhones = phones.map((phone) => phone.brand); // It returns an array
console.log(gettingPhones);
/* Output: [
  'Samsung', 'Apple',
  'Xiaomi',  'Oppo',
  'Vivo',    'Realme',
  'Huawei',  'OnePlus',
  'Nokia',   'Motorola'
]

Explanation:
- `map` iterates over each element in the `phones` array.
- For each `phone` object, `phone.brand` extracts the brand name.
- `map` returns a new array (`brands`) containing only the brand names.
*/


// Example using forEach to log each phone's color
phones.forEach((phn) => console.log(phn.color));  // It doesn't return anything so there's no reason to put in into a variable since it will only show undefine if we console log that variable
/*
Output:
- "Black"
- "Silver"
- "Blue"
- "Green"
- "Red"
- "Yellow"
- "White"
- "Gray"
- "Black"
- "Purple"

Explanation:
- `forEach` iterates over each element in the `phones` array.
- The provided function `(phn) => console.log(phn.color)` is executed for each element.
- `forEach` logs each phone's color to the console.
- `forEach` does not return anything (returns `undefined`).
*/

// Note: forEach is typically used when you want to perform an action for each element
// of an array, such as logging, without creating a new array. It's useful for side effects.

// Note: map is used when you want to transform elements of an array into a new array
// of the same length, based on the return value of the provided function. It's useful
// for creating a new array based on modifications or extractions from the original array.