function add (first, second = 10){
    const total = first + second;
    return total;
}

const result = add (10);
console.log (result);

function fullName (firstName, lastName = "Shahriyar"){
    const name = firstName + " " + lastName;
    return name;
}

const name = fullName("Hasnat");
console.log (name);