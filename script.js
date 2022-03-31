// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// Promises
// 3 states: Pending, Fulfilled, Rejected

const users = fetch('https://jsonplaceholder.typicode.com/users');

// Pending
console.log(users);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
    })