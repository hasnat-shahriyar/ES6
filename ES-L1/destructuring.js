// Object and Array Destructuring
const bio = {Name : "Hasnat", Age : 23, Profession : "Student"}
const {Name, Age, Profession} = bio;
console.log (Name);

const friends = ["Nahin", "Emon", "Masud", "Shad"]
const [me, firstFriend, secondFriend, thirdFriend] = friends;
console.log (me, firstFriend, thirdFriend);