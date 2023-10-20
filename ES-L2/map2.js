const numbers = [12, 14, 15, 16];
const half = numbers.map ( n => n/2);
const thirds = numbers.map ( x => x/3);

const friends = ["Rakib", "Mehedi", "Noyon", "Mahir"];
const firstLetters = friends.map ( friends => friends [0]);
console.log (firstLetters);

const nameLength = friends.map (friends => friends.length);
console.log (nameLength);