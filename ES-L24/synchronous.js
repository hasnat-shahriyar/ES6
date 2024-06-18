let x;
const getVar = () => {
    setTimeout(() => {
        x = 100;
    }, 5000);
    return x;
}

let value = getVar();
console.log('The value is: ' + value);

let y;
const newFunc = () => {
    y=500;
    return y;
}
let funcValue = newFunc();
console.log(funcValue);
