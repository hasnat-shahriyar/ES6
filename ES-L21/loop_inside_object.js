let obj = {
    Bangladesh: 'Dhaka',
    India: 'Delhi',
    Pakistan: 'Islamabad',
    Nepal: 'Kathmandu',
}

for (nm in obj){
    console.log(nm);
}
console.log();
for (nm in obj){
    console.log(obj[nm]);
}