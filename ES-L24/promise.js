const myPromise = new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
        resolve('Promise was resolved!');
    } else {
        reject('Promise was rejected!');
    }
})

myPromise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Promise has been settled!');
})