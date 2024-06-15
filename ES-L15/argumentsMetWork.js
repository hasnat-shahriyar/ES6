function argumentMetWork() {
    let argsArr = Array.prototype.slice.call(arguments);
    argsArr.map(function (oneArgs) {
        console.log(oneArgs);
    })    
}


argumentMetWork('Hasnat', 'Shahriyar', 'Nahin');