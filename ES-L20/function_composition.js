let one = (twoParam) => {
    let num = 10;
    let resultOne = num + twoParam;
    return resultOne;
}

let two = (a, b) => {
    let resultTwo = a + b;
    return resultTwo;
} 

let resultFromTWo = two(5, 5);

let finalResult = one(resultFromTWo);

console.log(finalResult);