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


