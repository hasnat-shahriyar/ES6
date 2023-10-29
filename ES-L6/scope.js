// Block scope, global scope, and understanding of hoisting.

function add(a, b) {
    // Inside the function, we create a new variable 'total' and set it to the result of multiplying 'a' and 'b'.
    const total = a * b;

    // We then log the values of 'a' and 'b' to the console, so you can see what values were passed to the function.
    console.log(a, b);

    // if (b > 5) {
    //     const sum = 25 + a + b; // 'sum' is defined within the 'if' block.
    // }
    // If I uncomment the following line, it will result in an error:
    // console.log(sum); // 'sum' is not accessible outside the 'if' block.
    // 'sum' cannot be accessed here because it's out of scope.

    // Finally, we return the value of 'total' as the result of the function.
    return total;
}

// If I uncomment them, I'll get errors because 'a', 'b', and 'total' are not defined outside the 'add' function.
// console.log(a, b); // This will result in an error because 'a' and 'b' are not defined here.
// console.log(total); // This will also result in an error because 'total' is not defined here.
// I cannot use them outside the function if I do use them then it will show an error

// This line calls the 'add' function with the values 5 and 7 as its arguments and displays the result.
add(5, 7);
