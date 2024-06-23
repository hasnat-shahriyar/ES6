// For of in string
const name = "Nahin";

for (const characters of name) {
  console.log(characters);
}

// For of in an array
const arr = [5, 10, 15, 20];
for (const array of arr) {
  console.log(array + array);
}

// As for object we cannot use for of in an object instead we use for in
// But we can use for of for object using a method like this
const person = {
    name: "Nahin",
    age: 24,
    address: "Dhaka, Bangladesh",
    occupation: "Software Engineering",
    status: "Student",
  };
  
  // Object.keys() returns an array of keys from the object
  const keys = Object.keys(person);
  
  // Using for...of loop to iterate over keys
  for (const key of keys) {
      // key variable already holds each key in each iteration
      // Use person[key] to access the corresponding value
      const value = person[key];
  
      console.log(`Key: ${key}, and Value: ${value}`);
  }
  