/**
 * Calculates the mean number of bits required to represent numbers from 0 to n-1.
 * 
 * https://buttondown.com/cassidoo/archive/u1f36b-great-success-doesnt-come-in-short-periods/
 * 
 * @param {number} n - A positive integer.
 * @returns {string} The mean rounded to 2 decimal places.
 */

function meanBits(n) {
    if (n === 1) return "1.00";

    const maxBits = (n - 1).toString(2).length;
    let totalBits = 0;
    totalBits += 2 * 1;

    for (let b = 2; b < maxBits; b++) {
        let count = Math.pow(2, b - 1);
        totalBits += count * b;
    }

    let numbersCountedSoFar = Math.pow(2, maxBits - 1);
    let remainingNumbers = n - numbersCountedSoFar;
    totalBits += remainingNumbers * maxBits;

    return (totalBits / n).toFixed(2);
}


console.log(meanBits(6));  // 2.00
console.log(meanBits(10)); // 2.60