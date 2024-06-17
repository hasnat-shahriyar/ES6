const age = 18;

try {
    if (age < 18) {
        throw 'You are too young';
    }
    else{
        console.log('You are adult');
    }
} catch (error) {
    console.log(error)
}