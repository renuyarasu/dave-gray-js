// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Conditionals: If Statements
let testScore = 55;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
} else {
    if (collegeStudent) {
        grade = 'Un-satisfied';
    } else {
        grade = 'Fail'
    }
}
console.log(grade);