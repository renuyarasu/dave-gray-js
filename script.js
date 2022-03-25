// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// JavaScript Classes
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

class Pizz {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = 'original';
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizz {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = 'The Works';
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices!`);
    }
}
const myPizza = new SpecialtyPizza('medium');
myPizza.slice();