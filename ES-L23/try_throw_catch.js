const age = 17;

try {
    if (age < 18) {
        throw new Error('You are too young')
    } else {
        console.log('You are adult');
    }
} catch (error) {
    console.log(error);
}