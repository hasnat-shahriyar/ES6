// Regular Function
function hello() {
    console.log("Hello World");
}

// Calling the 'hello' function and storing its return value in 'msg'
let msg = hello();

// Since 'hello' function does not explicitly return anything, so 'msg' is undefined
console.log(msg);

// Function Expression
const hi = function () {
    console.log("Hi World");
};

// Named Function Expression
const hey = function hey() {
    console.log("Hey World");
};

// Arrow Function
const ola = () => {
    console.log("Ola World");
};

// Method 2
const shuprovat = () => console.log("Shuprovat World");
const retrn = () => 5;
const math = (a, b) => a + b;
let final = math(5, 5);
console.log(final);

// Returning an object
const objRet = () => {
    return {
        a: 6,
        b: 4,
    };
};
console.log(objRet());

// Returning an Object : Method 2
const objRet2 = () => ({
    c: 5,
    d: 5,
});

console.log(objRet2());

// Anonymous Function
function Anonymous() {
    return () => {
        console.log("Anonymous Function");
    };
}

// Call the Anonymous function and then call the returned function
Anonymous()();

// Note: The 'hello' function doesn't explicitly return anything, so 'msg' will be undefined.
