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

const myNewPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('myNewPromise! resolved the promise.')
    }, 2000);
});

myNewPromise.then(value => {
    console.log(value);
})

myPromise.then(value => {
    console.log(value);
})
