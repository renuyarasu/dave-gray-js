// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// 2nd parameter of Fetch is a object

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();
    const getJoke = jsonResponse.value.joke;
    console.log(getJoke);
}
requestJoke('Bruce', 'Lee'); // Bruce Lee once shat blood - the blood of 11,940 natives he had killed and eaten.