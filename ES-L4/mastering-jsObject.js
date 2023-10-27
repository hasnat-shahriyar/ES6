// Method 1
const bio = {}; // Create an empty object called 'bio'.
bio.name = "Hasnat Shahriyar"; // Add a 'name' property to the 'bio' object.
bio.age = 23; // Add an 'age' property to the 'bio' object.
bio.designation = "Junior Web Developer"; // Add a 'designation' property to the 'bio' object.

// Using a function as a property in an object.
bio.skills = function(){
    console.log ("HTML, CSS, JavaScript, API, ReactJS");
}

console.log(bio); // Print the 'bio' object and its properties to the console.

// Object Create Method
const nahin = Object.create(bio); // Create a new object 'nahin' based on the 'bio' object.
console.log(nahin.age); // Access and print the 'age' property from the 'nahin' object, which is inherited from 'bio'.

// Class and Constructor
class Person { // Define a class named 'Person'.
    Name = "Nusrat Jahan Mim"; // Class property 'Name' with a default value.
    Address = "Dinajpur"; // Class property 'Address' with a default value.
    constructor(age){ // Constructor method for the 'Person' class.
        this.Age = age; // Create an 'Age' property for each instance of 'Person' with the provided 'age' value.
    }
}

const person1 = new Person(19); // Create a new 'Person' object, 'person1', with an 'age' of 19.
console.log(person1); // Print the 'person1' object and its properties to the console.

// Using Function 
function Car (model, price){
    this.Model = model;
    this.Price = price;
}

const honda = new Car ("Honda Civic 2023", 5200000);
console.log (honda);