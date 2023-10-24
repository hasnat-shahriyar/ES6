// Object and Array Destructuring

// Object
const bio = {Name : "Hasnat", Age : 23, Profession : "Student"}
const {Name, Age, Profession} = bio;
console.log (Name);

// Array
const friends = ["Nahin", "Emon", "Masud", "Shad"]
const [me, firstFriend, secondFriend, thirdFriend] = friends;
console.log (me, firstFriend, thirdFriend);

// Function
function getNames (){
    return ["Eti", "Baki"];
}
const [ammu, abbu] = getNames();
console.log (ammu, abbu);
