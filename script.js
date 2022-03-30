// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((res, rej) => {
    const error = false;
    if (!error) {
        res('Yes! resolved the promise.')
    } else {
        rej('No! rejected the promise.')
    }
});
// console.log(myPromise);

// Thenables
myPromise.then(value => {
    return value + 1;
})
    .then(newValue => {
        console.log(newValue);
    })
    