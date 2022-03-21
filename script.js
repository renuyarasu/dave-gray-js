// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// Objects
// Key value pairs in curly braces

const vehicle = {
    wheels: 4,
    color: 'Gray',
    engine: () => 'Volvo',
}

const truck = Object.create(vehicle);
// const result = truck.wheels; // 4
// const result = truck.engine(); // Volvo

const car = Object.create(vehicle);
car.doors = 2;
const result = car.doors;


console.log(result);