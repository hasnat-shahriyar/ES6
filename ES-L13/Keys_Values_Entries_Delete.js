const person = {
  name: "Nahin",
  age: 24,
  address: "Dhaka, Bangladesh",
  occupation: "Software Engineering",
  status: "Student",
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

delete person.status;
console.log(person);