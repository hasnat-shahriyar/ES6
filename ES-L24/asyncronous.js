let value;

setTimeout(() => {
    value = 15;
}, 5000);

console.log(value); // First log, immediately, undefined
console.log(value); // Second log, immediately, undefined

setTimeout(() => {
    console.log(value); // Third log, after 5 seconds, 15
}, 5000);


/*
This JavaScript code snippet demonstrates the concept of asynchronous behavior
using the `setTimeout` function. Below is a step-by-step explanation of the process:

1. Variable Declaration:
   let value;
   - A variable named `value` is declared but not assigned any initial value.
   - At this point, `value` is `undefined`.

2. Asynchronous Operation Setup:
   setTimeout(() => {
       value = 15;
   }, 5000);
   - The `setTimeout` function is used to schedule a callback function to be executed after 5000 milliseconds (5 seconds).
   - The callback function assigns the value `15` to the variable `value`.
   - Importantly, `setTimeout` does not block the execution of subsequent code; it schedules the callback and immediately returns.

3. Immediate Logging:
   console.log(value);
   console.log(value);
   - These `console.log` statements are executed immediately after setting up the `setTimeout`.
   - At this point, the `value` variable has not been modified by the `setTimeout` callback, so both logs output `undefined`.

4. Delayed Logging:
   setTimeout(() => {
       console.log(value);
   }, 5000);
   - An additional `setTimeout` is added to log the `value` after 5 seconds.
   - This demonstrates that after the delay, the `value` will have been updated to `15` by the first `setTimeout` callback.

Summary:
- The initial `console.log` statements show `undefined` because the `setTimeout` callback hasn't executed yet.
- The `setTimeout` function allows for scheduling code to run after a delay without blocking the execution of subsequent code.
- After 5 seconds, the first `setTimeout` callback updates `value` to `15`, which is then shown by the delayed `console.log`.

Here is the complete code:

let value;

setTimeout(() => {
    value = 15;
}, 5000);

console.log(value); // First log, immediately, undefined
console.log(value); // Second log, immediately, undefined

setTimeout(() => {
    console.log(value); // Third log, after 5 seconds, 15
}, 5000);
*/
