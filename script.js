// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// Promises
// Async & Await

const users = {
    userList: []
}
const myFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    return jsonUserData;
}
const otherFunction = async () => {
    const data = await myFunction();
    users.userList = data;
    console.log(users.userList);
}
otherFunction();
console.log(users.userList);