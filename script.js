// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();

// JavaScript Factory Functions
function pizzaFactory(pizzaSize) {
    const crust = 'original';
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking ${size}  ${crust} crust pizza.`)
    };
}
const myPizza = pizzaFactory('small');
myPizza.bake();