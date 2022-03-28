// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// Web Storage API
// The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.
// We do not have to type window. It's implied. 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// sessionStorage |  localStorage (persistent data)

const myObj = {
    name: 'VedaGna',
    logName: function () {
        console.log(this.name);
    }
}
const myArray = ['Eat', 'Sleep', 'Code'];

sessionStorage.getItem('mySessionStore', myObj); // [object Object]
