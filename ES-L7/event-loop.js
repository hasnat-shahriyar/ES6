function x (){
    console.log ("a")
    y();
    console.log ("aa");
}

function y (){
    console.log ("b")
    z();
    console.log ("bb");
}

function z (){
    console.log ("c");
    console.log ("cc");
}

x();