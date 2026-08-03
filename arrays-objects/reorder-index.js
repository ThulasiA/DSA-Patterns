// Given an array of strings A, and an array of indexes B, reorder the strings
// in array A with the given indices in array B. You can choose to do this in-place,
// or return a new array. As you decide which route to take, think... which is more efficient?

// Example:
// let a = ['C', 'D', 'E', 'F', 'G', 'H'];
// let b = [3, 0, 4, 1, 2, 5];

// > reorder(a, b) // a is now ['D', 'F', 'G', 'C', 'E', 'H']

// https://buttondown.com/cassidoo/archive/u1f351-you-cant-suppress-the-things-that-make-us/

function reorder(a, b) {
    let result = new Array(a.length);

    for (let i = 0; i < a.length; i++) {
        result[b[i]] = a[i];
    }

    return result;
}

// in place reorder
function inplaceReorder(a, b) {
    for (let i = 0; i < a.length; i++) {
        while (b[i] !== i) {
            let target = b[i];

            [a[i], a[target]] = [a[target], a[i]];

            [b[i], b[target]] = [b[target], b[i]];
        }
    }
    return a;
}

let a = ["C", "D", "E", "F", "G", "H"];
let b = [3, 0, 4, 1, 2, 5];

console.log(inplaceReorder(a, b));
