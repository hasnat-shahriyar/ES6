function defaultParams(name, age) {
    name ? name = name : name = 'Hasnat Shahriyar';
    age ? age = age : age = 24;
    console.log(`My name is ${name} and I am ${age}`);
}

defaultParams();
defaultParams('Shahriyar Nahin', 25);