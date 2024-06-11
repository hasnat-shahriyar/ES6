const lex = {
    aFunc: () => {
        // Arrow function 'aFunc' does not have its own 'this' context
        // It inherits 'this' from its surrounding (lexical) context, which is the global object in this case
        console.log(this); // Logs the global 'this' object (e.g., 'window' in a browser or 'global' in Node.js)

        return () => {
            // The inner arrow function also does not have its own 'this' context
            // It inherits 'this' from 'aFunc's context, which is the global object
            console.log(this); // Logs the same global 'this' object as the outer arrow function
        };
    }
}

lex.aFunc()(); 
// When 'lex.aFunc()' is called, it logs the global 'this' object due to the lexical binding of 'this'
// The returned arrow function is immediately called, and it also logs the global 'this' object for the same reason

// Arrow functions do not have their own 'this' context. 
// Instead, they lexically inherit 'this' from the enclosing context in which they are defined.
// This means that in the example above, both the outer and inner arrow functions log the global 'this' object
// regardless of how the functions are called or whether 'call()', 'apply()', or 'bind()' is used to try to change the 'this' value.
