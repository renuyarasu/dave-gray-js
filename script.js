// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// workflow function

const getAddress = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await res.json();
    const userAddress = jsonData.map(user=>user.address.city)
    console.log(userAddress);
}
getAddress();