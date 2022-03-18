// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours 
console.clear();

// Conditionals: Ternary Operators
//syntax
// condition ? if true : if false
// ':' else here

let playerOne = 'rock';
let computer = 'paper';
let result =
    playerOne === computer
        ? 'Tie Game!'
        : playerOne === 'rock' && computer === 'paper'
            ? 'Computer Wins!'
            : playerOne === 'paper' && computer === 'scissors'
                ? 'Computer Wins!'
                : playerOne === 'scissors' && computer === 'rock'
                    ? 'Computer Wins!'
                    : 'Player One Wins!';
console.log(result);

