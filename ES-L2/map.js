const numbers = [2, 4, 6, 8,];
const output = [];

for (const number of numbers){
    const multiply = number * 2;
    output.push(multiply);
}


// Using Function
function getDoubles (numbers){
    const output = [];
    for (const number of numbers){
        const multiply = doubleIt(number);
        output.push(multiply);
    }    
    return output;
}

// Function Method 2
function doubleItOld (num){
    return num * 2;
}

// Function Method 3
const doubleIt = num => num * 2;

// Method 4
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map (num => num * 2);
console.log (makeDoubleDirect);

const result = getDoubles(numbers);
console.log (result);

console.log (makeDouble);

