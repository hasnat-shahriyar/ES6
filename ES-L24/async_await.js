const promised = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve('I am here.');
        }
        else {
            reject('No! It is an error!');
        }
    }, 5000);
})

const promiseHandled = async () => {
    try {
        const data = await promised;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

promiseHandled();