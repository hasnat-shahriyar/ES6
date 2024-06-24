const getData = new Promise ((resolve, reject)=> {
    // resolve(50)
    reject('No data found')
})

getData
.then( data => console.log(data+50))
.catch(error => console.log('Error: ', error))