// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Scope - var, let, const
// global scope

var x = 10; // Function Scoped
let y = 20; // Block Scoped
const z = 30;

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

function myFunction() {
    var x = 1;
    const z = 2;
    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);
    {
        var x = 11;
        const z = 22;
        console.log(`Block: ${x}`);
        console.log(`Block: ${y}`);
        console.log(`Block: ${z}`);

    }
}
myFunction()