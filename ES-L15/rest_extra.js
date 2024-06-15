const restExtra = (name, age, ...others) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
    others.map(skills => console.log(`Skills : ${skills}`));
}

restExtra('Hasnat', 24, 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB');