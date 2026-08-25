// https://buttondown.com/cassidoo/archive/u1fa81-the-worst-enemy-to-creativity-is-self/

function partitionArray(arr) {
    let odds = [];
    let evens = [];
    let zeroes = [];

    for (let num of arr) {
        if (num === 0) {
            zeroes.push(num);
        } else if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }

    return [...odds, ...evens, ...zeroes];
}

console.log(partitionArray([0, 3, 2, 1, 4, 0, 7]));
// [3, 1, 7, 2, 4, 0, 0]
