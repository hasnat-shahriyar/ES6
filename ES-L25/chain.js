const person = {
  name: "Nahin",
  age: 24,
  address: "Dhaka, Bangladesh",
  occupation: "Software Engineering",
  status: "Student",
  additionalInfo: {
    hobbies: ["Reading", "Gaming"],
    languages: ["JavaScript", "Python", "Java"],
    isMarried: false,
  },
};


// This line will throw a TypeError because newObj is not defined in person.additionalInfo,
// causing an attempt to access the passion property on undefined.

let objectResult = person.additionalInfo.newObj.passion;
console.log(objectResult);


// This line assigns newObjectResult to person.additionalInfo.newObj?.passion,
// using optional chaining (?.) to safely access the passion property.
// If newObj or passion does not exist, newObjectResult will be undefined.
let newObjectResult = person.additionalInfo.newObj?.passion;
console.log(newObjectResult); // Output: undefined