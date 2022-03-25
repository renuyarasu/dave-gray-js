// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
// console.clear();

// JavaScript Errors and Handling Errors

// Uncaught TypeError: Assignment to constant variable.

/* 
The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A TypeError may be thrown when:

an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
when attempting to modify a value that cannot be changed; or
when attempting to use a value in an inappropriate way. */


"use strict"

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error('Odd numbers!')
            } 
            console.log('Even numbers!');
        } catch (err) {
            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);
        } finally {
            console.log('...finally');
            i++;
        }
    }
};
makeError();

