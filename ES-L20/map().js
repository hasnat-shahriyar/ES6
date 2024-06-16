let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function (item) {
    return item * item;
})

console.log(newArr);

let threeArgument = arr.map((item, index, fullArray) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${fullArray}`);
})