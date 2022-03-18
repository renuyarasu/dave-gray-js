// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Conditionals: If Statements

let customerIsBanned = false;
let crackers = true;
let soup = 'Chicken Noodle Soup!';
let reply;
if (customerIsBanned) {
    reply = 'No soup for you!'
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`
} else if (soup) {
    reply = `Here's your order of ${soup}`
} else {
    reply = "Sorry, we are out of soup."
}
console.log(reply);