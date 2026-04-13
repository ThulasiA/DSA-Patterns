/**
 *
 * https://buttondown.com/cassidoo/archive/u1f9d1-u1f680-we-will-always-choose-earth-we-will/
 * Time Complexity: O(n + r) (n = number of layers, r = number of rules)
 * Space Complexity: O(n)
 * 
 * @param {string[]} layers - Ordered list of pizza layers.
 * @param {string[][]} rules - List of [bottom, top] ordering constraints.
 * @returns {true | string[]} True if valid, else the first invalid rule.
 */

function validatePizza(layers, rules) {
    let map = new Map();
    for (let i = 0; i < layers.length; i++) {
        map.set(layers[i], i);
    }

    for (let [bottom, top] of rules) {
        if (map.get(bottom) === undefined ||
            map.get(top) === undefined ||
            map.get(bottom) > map.get(top)) {
            return [bottom, top];
        }
    }

    return true;
}

const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
const rules = [
    ["sauce", "cheese"],
    ["cheese", "pepperoni"],
    ["dough", "basil"]
];
console.log(validatePizza(layers, rules));

// const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
// const rules = [
//   ["sauce", "cheese"],
//   ["cheese", "pepperoni"],
//   ["dough", "basil"],
// ];
// const rules2 = [
//   ["cheese", "pepperoni"],
//   ["cheese", "sauce"], // "it's under the sauce"
// ];

// validatePizza(layers, rules);
// > true

// validatePizza(layers, rules2);
// > ['cheese', 'sauce']