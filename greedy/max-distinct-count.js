/**
 * https://buttondown.com/cassidoo/archive/u1f69a-innovation-comes-out-of-great-human/
 * 
 * Returns the maximum number of distinct positive integers
 * whose sum equals n. The optimal solution always uses the
 * smallest distinct integers first: 1, 2, 3, ..., k.
 *
 * @param {number} n - Positive integer target sum.
 * @returns {number} Maximum count of distinct positive integers summing to n.
 */

function maxDistinctCount(n) {
    if (n <= 2) return 1;

    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n >= i) {
            n -= i;
            count++;
        } else {
            break;
        }
    }
    return count;
}

console.log(maxDistinctCount(15)); // 5

// > maxDistinctCount(5)
// > 2
// // 2 + 3 = 5, or 1 + 4 = 5

// maxDistinctCount(8)
// > 3
// // 1 + 2 + 5 = 8

