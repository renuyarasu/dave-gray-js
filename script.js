// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Document Object Model (DOM - https://www.youtube.com/watch?v=WbG86sMd3SU&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=21)
/* 
The Document Object Model: DOM
Selecting an element with an ID
Selecting an element with a query selector
Changing the CSS with the style property
Selecting elements by class name 
Selecting elements with querySelectorAll()
HTMLCollection vs NodeList
Searching within the results of a previous selector
Selecting elements by tag name
Applying more specific DOM selectors
Modifying CSS with a DOM selector
Changing text inside of an element
Changing the HTML within a parent element
Navigating the DOM tree
Removing all the nodes in a parent element
Creating new elements
Adding new property values to the element
Appending the new element to the DOM
Creating new elements with a loop */

const view1 = document.getElementById('view1');
// console.log(view1);

const view2 = document.getElementsByClassName('view2');
// console.log(view2);

const views = document.getElementsByClassName('view');
// console.log(views);

const queryViews = document.querySelectorAll('.view');
// console.log(queryViews);

const divs = document.querySelectorAll('div');
// console.log(divs);

const tagDiv = document.getElementsByTagName('div');
// console.log(tagDiv);

const evenDivs = view1.querySelectorAll('div:nth-of-type(2n)')
// console.log(evenDivs);

const oddDivs = view1.querySelectorAll('div:nth-of-type(2n+1)');
// console.log(oddDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = 'crimson';
    evenDivs[i].style.width = '150px';
    evenDivs[i].style.height = '150px';
    evenDivs[i].textContent = ('00');
    evenDivs[i].innerHTML = '<h1>0</h1>';
    evenDivs[i].style.justifyContent = 'flex-start';
}
console.log(evenDivs[0].parentElement);