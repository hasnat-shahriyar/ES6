function callMyName(name, callback) {
    let myAge = 24;
    callback(myAge);
    console.log(`Hello My name is ${name}`);
}

function dob(age) {
    console.log(`And my age is ${age}`);
}

callMyName('Hasnat Shahiyar', dob)