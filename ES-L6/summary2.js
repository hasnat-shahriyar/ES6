// Declare a string variable with a template string. In that, put the value of one of the three properties of the above object in your template string. One of these will set a property--from the property of the nested object. Another property would be that property's value is an array with the elements at the second position.
const newObj = {
    name: "nahin",
    bio: {
        fullName: "hs-nahin",
        spouse: "ns-mim",
    },
    contact: ["01784934660", "01518997246"]
};

const templateString = `My name is ${newObj.name}. My spouse's name is ${newObj.bio.spouse}. My second contact number is ${newObj.contact[1]}.`;

console.log(templateString);
