try{
    let age = 23;
    if (age < 24){
        throw "you are not eligible"
    } else if (age > 23){
        throw "You are eligible"
    }
    // console.log("hello again");
} catch(helloError){
    console.log(helloError);
    console.log(helloError.name);
    console.log(helloError.message);
    console.log("Hey I have solved the error!");
} finally{
    console.log("hello again");
    
}