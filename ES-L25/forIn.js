// As for object we cannot use for of in an object instead we use for in
const person = {
  name: "Nahin",
  age: 24,
  address: "Dhaka, Bangladesh",
  occupation: "Software Engineering",
  status: "Student",
};

for (const keys in person) {
    const value = person[keys];
    console.log(`Key: ${keys}, and Value: ${value}`);
}