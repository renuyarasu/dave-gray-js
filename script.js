// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// Objects
// Key value pairs in curly braces

const bands = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul',
    drums: 'John Bonham',
}
const keys = Object.keys(bands);
const values = Object.values(bands);

console.log(keys); // [ 'vocals', 'guitar', 'bass', 'drums' ]
console.log(values); // [ 'Robert Plant', 'Jimmy Page', 'John Paul', 'John Bonham' ]