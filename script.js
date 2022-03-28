// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

/* // JavaScript: Event Listeners
=================================
Insure the DOM is available to interact with
How to load your script for DOM interaction
Syntax: addEventListener(event, function, useCapture)
Using a function name in the event listener
Removing a function with a name: removeEventListener()
Using an anonymous function in the event listener
Listening for the readystatechange event
Constructing an initApp() function
Event Bubbling
Event Capturing
Event Propagation and stopPropagation()
event.target usage
classList, add, remove, and toggle
Listening for a HTML Form submit event
HTML Form default behavior
Prevent default behavior with event.preventDefault() */

// syntax: addEventListenser(event, function, useCapture)

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        console.log('readyState: complete');
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector('#view3');
    const myForm = document.querySelector('#myForm');
    myForm.addEventListener('submit', (e) => {
        console.log('Submit event');
    })
}