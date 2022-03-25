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
view1.style.display = 'none';
const view2 = document.getElementById('view2');
view2.style.display = 'flex';

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iterator) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = iterator;
    newDiv.style.background = 'white';
    newDiv.style.color = '#000';
    newDiv.style.fontWeight = '700';
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.margin = '10px';
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.flexDirection = 'column';
    parent.append(newDiv);
}
createDivs(view2, 10); // for create single div 
for( let i = 0 ; i<=12; i++){
    createDivs(view2, i)
}
