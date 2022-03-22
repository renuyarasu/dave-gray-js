// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// Classes
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

class Pizza {
    constructor(pizzatype) {
        this.type = pizzatype;
        this.size = 'medium';
        this.crust = 'original';
    }
    bake() {
        console.log(`Baking a ${this.size} size ${this.crust} crust ${this.type} pizza!`);
    }
}
const myPizza = new Pizza('pepper'); // Baking a medium size original crust pepper pizza!

myPizza.bake();