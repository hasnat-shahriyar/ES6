// Loop through an object using for in, for of, object entries
const numbers = [10, 12, 14, 16, 18, 20];
for (const number of numbers){
    console.log (number);
}

// "for of" cannot be used in object else it will show an error
const bottle = {
    Product: "Water",
    Price: 200,
    Weight: "500 ml",
    Mineral: true,
};
// for (const key of bottle){
//     console.log (key);
// }
// Option 1 : To loop through an object
const keys = Object.keys(bottle);
for (const key of keys){
    console.log (key);
}