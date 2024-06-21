const one = (calltwo) => {
    console.log('Step 1');
    calltwo();
}

const two = () => {
    console.log('Step 2');
}

one(two);