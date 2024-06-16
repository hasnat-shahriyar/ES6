let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = arr.reduce( (sum, item) => {
    return sum = sum + item;
}, 10);

console.log(total);