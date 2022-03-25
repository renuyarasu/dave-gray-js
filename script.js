// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// JavaScript Classes
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

class Pizza {
    constructor(typePizza, sizePizza) {
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = 'original';
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}
const myPizza = new Pizza('small', 'pepper');
myPizza.type = 'large';
myPizza.bake();