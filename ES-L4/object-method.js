// Object method access and set property values
// Define an object called 'aboutMe'
const aboutMe = {
    Name: "Hasnat Shahiyar",
    Salary: 25000,
    Designation: "Front End Developer",
    Skills: ["HTML", "CSS", "JavaScript"],
    
    // Method to calculate and return the experience
    Experience: function () {
        return this.Name + " has an experience of 3 months of internship";
    },
    
    // Method to add a new skill and return a message
    newSkill: function (skill) {
        this.Experience(); // Call the 'Experience' method to get the experience message.
        return `${this.Name} is enhancing and improving his skills in ${skill}`;
    }
}

// Call the 'Experience' method and store the result in 'finalOutput'
const finalOutput = aboutMe.Experience();
console.log(finalOutput); // Print the 'finalOutput' message to the console.

// Call the 'newSkill' method with the argument "React.js" and store the result in 'finalSkill'
const finalSkill = aboutMe.newSkill("React.js");
console.log(finalSkill); // Print the 'finalSkill' message to the console.
