let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrResult = arr.filter( item => item % 2 === 0);

console.log(arrResult);

let nameArr = ['Shad', 'Mehedi', 'Rakib', 'Nahin', 'Emon'];
let nameResult = nameArr.filter( nm => nm[0] !== 'E'&& nm[0] !=='S' && nm[0] !=='R');
console.log(nameResult);