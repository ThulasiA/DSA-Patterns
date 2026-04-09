/**
 * https://buttondown.com/cassidoo/archive/9-ufe0f-u20e3-there-are-no-mistakes-only/
 * 
 * Given an integer n, return all unique combinations of Perrin numbers 
 * (up to and including the nth Perrin number) that sum to a target value k,
 * where each Perrin number can be used at most once. Return the combinations sorted in ascending order.
 * 
 * Example: 
 * > perrinCombinations(7, 12)
 * [[0,2,3,7],[0,5,7],[2,3,7],[5,7]]
 * 
 * > perrinCombinations(6, 5)
 * [[0,2,3],[0,5],[2,3],[5]]
 *
 * Perrin sequence:
 *   P(0) = 3, P(1) = 0, P(2) = 2
 *   P(n) = P(n-2) + P(n-3)
 *
 * Time Complexity: O(2^m)
 * Space Complexity: O(m)
 * 
 *
 * @param {number} n - Highest Perrin index to generate.
 * @param {number} k - Target sum for combinations.
 * @returns {number[][]} All unique combinations that sum to k.
 */

function perrinCombinations(n, k) {
    let perrinArray = [3, 0, 2];

    for (let i = 3; i <= n; i++) {
        let next = perrinArray[i - 2] + perrinArray[i - 3];
        perrinArray.push(next);
    }

    let uniqueNumbers = [...new Set(perrinArray)].sort((a, b) => a - b);
    let result = [];

    const dfs = (i, sum, path) => {

        if (sum === k) {
            result.push([...path]);
            return;
        }
        if (sum > k || i === uniqueNumbers.length) {
            return;
        }

        for (let j = i; j < uniqueNumbers.length; j++) {
            path.push(uniqueNumbers[j]);
            dfs(j + 1, sum + uniqueNumbers[j], path);
            path.pop();
        }
    };

    dfs(0, 0, []);
    return result;

}

console.log(perrinCombinations(7, 12));

// perrinCombinations(7, 12)
// [[0,2,3,7],[0,5,7],[2,3,7],[5,7]]

// perrinCombinations(6, 5)
// [[0,2,3],[0,5],[2,3],[5]]