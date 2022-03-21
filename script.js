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

for (let job in bands) {
    console.log(`On ${job}, its's ${bands[job]}!`);
}
// On vocals, its's Robert Plant!
// On guitar, its's Jimmy Page!
// On bass, its's John Paul!
// On drums, its's John Bonham!

delete bands.bass;
console.log(bands);