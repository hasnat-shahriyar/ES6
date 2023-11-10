console.log (1);
console.log (2);
console.log (3);
console.log (4);
console.log (5);
let num = 6;
const intervalID = setInterval (()=> {
    console.log(++num)
    if (num === 10){
        clearInterval(intervalID);
    }
}, 1000);