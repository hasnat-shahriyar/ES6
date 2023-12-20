// Lexical Scope

// Global Scope
var lang = "Python"; // Variable 'lang' is declared in the global scope and initialized with the value "Python".

// Function Scope
const learn = (topic) => {
    // var lang = topic; // Avoiding variable redeclaration using 'var' would create a new variable 'lang' in the function scope, but we use the outer 'lang' due to lexical scoping.
    lang = topic; // Modifying the global variable 'lang' with the value of the 'topic' parameter within the function scope.
    console.log (`I am learning ${topic}`); // Logging the learning process with the provided 'topic'.
}

learn ("JavaScript"); // Calling the 'learn' function with the argument "JavaScript".

console.log (`I know ${lang}`); // Logging the value of the global variable 'lang' after the 'learn' function call.


// Lexical scoping means that the scope of a variable is determined by its location in the source code, i.e., where the variable is declared. In this example, the global variable 'lang' is accessible both globally and within the 'learn' function due to lexical scoping. When 'learn' is called, it modifies the global variable 'lang' because of the absence of the 'var' keyword, demonstrating how lexical scoping allows inner scopes to access variables from outer scopes.