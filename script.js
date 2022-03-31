// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// abstract into function

// from Form
const getDataFromForm = () => {
    const requestObj = {
        firstName: 'Bruce',
        lastName: 'Lee',
        categories: ['nerdy']
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);   
}
const postJokeToPage = (joke) => {
    console.log(joke);
}

// procedural 'workflow' function
const processJokeRequst = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log('Finished!');
}
processJokeRequst();
requestJoke('Bruce', 'Lee'); // Bruce Lee once shat blood - the blood of 11,940 natives he had killed and eaten.