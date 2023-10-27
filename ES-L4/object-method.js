// Object method access and set property values
const aboutMe = {
    Name : "Hasnat Shahiyar",
    Salary : 25000,
    Designation : "Front End Developer",
    Skills : ["HTML", "CSS", "JavaScript"],
    Experience : function (){
        return this.Name + " has a experience of 3 months of internship";
    },
    newSkill : function (skill){
        this.Experience ();
        return `${this.Name} is enhancing and improving his skills on ${skill}`
    }
}

const finalOutput = aboutMe.Experience();
console.log (finalOutput);

const finalSkill = aboutMe.newSkill("React.js")
console.log (finalSkill);