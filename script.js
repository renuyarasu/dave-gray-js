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

const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');

const doSomething = () => {
    console.log('Doing Something!');
}

h1.addEventListener('click', doSomething, false);
h1.removeEventListener('click', doSomething, true);

h1.addEventListener('click', function (e) {
    console.log(e.target); // <h1>Doing Something!​</h1>​
    e.target.textContent = 'Clicked!' // <h1>​Clicked!​</h1>
})