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
    try {
        throw new customError('This is a custom error')
    } catch (err) {
        /* console.warn(err);
        console.table(err);
        console.error(err);*/
        console.error(err.name);
        console.error(err.message); 
        console.error(err.stack);
    }
}
makeError();

function customError() {
    this.message = this.message;
    this.name = customError;
    this.stack = `${this.name} ${this.message}`;
}