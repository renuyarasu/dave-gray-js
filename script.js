// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// workflow function

const getAllUserEmails = async () => {
    const reseponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await reseponse.json();
    const userEmailArray = jsonData.map(user => {
        return user.email;
    });
    console.log(userEmailArray);
}
getAllUserEmails();