// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Conditionals: Ternary Operators
//syntax
// condition ? if true : if false
// ':' else here

let testScore = 98;
let myGrade =
    testScore >= 85 ? 'Grade A'
        : testScore >= 65 ? 'Grade B'
            : testScore > 55 ? 'Grade C'
                : testScore >= 35 ? 'Grade D'
                    : 'Fail';
console.log(`My test grade a ${myGrade}.`);