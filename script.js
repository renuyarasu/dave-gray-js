// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Conditionals: Ternary Operators
//syntax
// condition ? if true : if false
// ':' else here

let soup = 'Chicken Noodle Soup';
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
    ? 'Sorry! No soup for you'
    : soup
        ? `Yes! we've ${soup} today!`
        : 'No!, soup today!'
console.log(soupAccess);
