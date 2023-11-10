function x() {
    console.log("a"); // Logs "a"
    y(); // Calls function y()
    console.log("aa"); // Logs "aa" after y() finishes
}

function y() {
    console.log("b"); // Logs "b"
    z(); // Calls function z()
    console.log("bb"); // Logs "bb" after z() finishes
}

function z() {
    console.log("c"); // Logs "c"
    console.log("cc"); // Logs "cc"
}

x(); // Calls function x() to start the sequence
