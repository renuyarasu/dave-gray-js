// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Web Storage API
// The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.
// We do not have to type window. It's implied. 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// sessionStorage |  localStorage (persistent data)

const myArray = ['Eat', 'Sleep', 'Code'];
const myObj = {
    name: 'VedaGna',
    hobbies: ['Eat', 'Sleep', 'Code'],
    logName: function () {
        console.log(this.name);
    }
}

sessionStorage.setItem('mySessionStore', JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'));
console.log(mySessionData);