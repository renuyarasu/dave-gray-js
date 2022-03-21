// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// Objects
// Key value pairs in curly braces

const myObjects = {
    name: 'VedaGna',
    is_school: false,
    age: 5,
    hobbies: ['Eat', 'Sleep', 'Play'],
    beverage: {
        morning: 'Hot Coffee',
        evening: 'Cold Coffee',
    },
    action: () => 'Hello World!'
}

console.log(myObjects.beverage.morning); //Hot Coffee
console.log(myObjects.beverage['evening']); //Cold Coffee
console.log(myObjects.action()); //Hello World!
