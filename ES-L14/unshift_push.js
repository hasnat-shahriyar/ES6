const arr = ['Mehedi', 'Shad', 'Rakib'];

arr.unshift('Nahin');
console.log(arr);

arr.push('Noyon');
console.log(arr);

const newArr = ['Emon', ...arr, 'Masud'];
console.log(newArr);