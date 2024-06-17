try {
    throw 'A basic error';
} 
catch (error) {
    console.log('Error message:', error);
} 
finally {
    console.log('This is the finally block, which always executes.');
}
