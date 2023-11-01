// Object inside an Object, Array inside an Object
let newObj = {
    name: "nahin",
    bio: {
        fullName: "hs-nahin",
        spouse: "ns-mim",
    },
    contact: ["01784934660", "01518997246"]
};

console.log(newObj.name);            // Accessing the 'name' property
console.log(newObj.bio.fullName);    // Accessing the 'fullName' property inside the 'bio' object
console.log(newObj.bio.spouse);      // Accessing the 'spouse' property inside the 'bio' object
console.log(newObj.contact);         // Accessing the 'contact' property (an array)
console.log(newObj.contact[0]);      // Accessing the first element of the 'contact' array
console.log(newObj.contact[1]);      // Accessing the second element of the 'contact' array


// Method 2

const myObject = {
    name: "Nahin",
    age: 23,
    address: {
      street: "123 Main St",
      city: "Anytown",
      division: "DHAKA",
    },
    hobbies: ["Coding", "Listening Music", "Watching the Nature"],
    getAge: function () {
      return this.age; // Return the 'age' property of the object
    },
  };
  
  console.log(myObject.name); // Access the 'name' property
  console.log(myObject.address.city); // Access the 'city' property within the 'address' object
  console.log(myObject.hobbies[0]); // Access the first element of the 'hobbies' array
  console.log(myObject.getAge()); // Call the 'getAge' method to get the 'age' property
  