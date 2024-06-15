const favorite = new Map();

favorite.set('name', 'Nahin');
favorite.set('age', 24);
favorite.set('profession', 'software engineer');

console.log(favorite);

favorite.forEach((value, key) => console.log(`Key is: ${key}, and the value is ${value}`));