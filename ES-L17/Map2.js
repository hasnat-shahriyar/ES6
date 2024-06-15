const nahin = new Map();

nahin.set('FullName', 'Shahriyar Nahin');

let result = nahin.get('FullName');
console.log(result);

let ToBeDeleted = nahin.delete('FullName');
console.log(ToBeDeleted);


const fahim = new Map();
fahim.set('toberemoved', 'willberemoved');
let fahimResult = fahim.get('toberemoved');
console.log(fahimResult);
let ToBeCleared = fahim.clear();
console.log(ToBeCleared);