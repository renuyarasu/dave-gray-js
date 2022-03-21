// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Functions
// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// Methods: Built-in Functions

/* function sum(x, y) {
    console.log(x);
    console.log(y);
    return x + y;
}
console.log(sum(5)); // NaN

 */

function sum(x, y) {
    if (x === undefined) {
        return x + y;
    }
    return x + y;
}
console.log(sum(5));