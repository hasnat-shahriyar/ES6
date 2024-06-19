const promiseWithData = control => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve('Data fetched successfully')
            } else {
                reject('Error fetching data')
            }
        }, 3000);
    })
}

promiseWithData(false)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(()=> {
    console.log('Fetch attempt finished');
})