// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// Arrays
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* const newArray = myArray.slice(2) // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(newArray); //[   3, 4, 5, 6, 7, 8, 9, 0]
 */

const newArray = myArray.slice(0, 5)
console.log(newArray); //[ 1, 2, 3, 4, 5]