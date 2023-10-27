// Object method access and set property values
const aboutMe = {
    name : "Hasnat Shahiyar",
    salary : 25000,
    designation : "Front End Developer",
    skills : ["HTML", "CSS", "JavaScript"],
    experience : function (){
        console.log (this.name, "has a experience of 3 months of internship")
    }
}

aboutMe.experience();