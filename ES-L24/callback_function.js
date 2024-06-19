const getVar = (callback) => {
    setTimeout(() => {
        console.log('A Function that takes some time');
        callback();
    }, 3000);
}

const printSomething = () => {
    console.log('Another Function');
}

getVar(printSomething);