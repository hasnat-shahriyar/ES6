try {
    throw new Error('Something went wrong');
} 
catch (error) {
    console.log('Error message:', error.message);
} 
finally {
    console.log('Finally block executed.');
}
