// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Fetch API
// Callbacks | Promises / Thenables / Async & Await

// Callbacks
function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA 'Callback Hell'
firstFunction(para, function () {
    secondFunction(para, function () {
        thirdFunction(para, function () {
                // ...
        
        });
    });
});