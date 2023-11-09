const getData = new Promise ((resolve, reject) => {
    resolve (420);
})

getData.then (data => console.log (data));
getData.then (data => console.log (data + 80));

const noData = new Promise ((resolve, reject) => {
    reject ("No Data is Available!")
})
noData
    .then (data => console.log (data + 80))
    .catch (err => console.error ("ERROR : ", err))