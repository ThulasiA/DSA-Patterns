/**
 * Computes the minimum number of operations (insert, delete, replace)
 * required to convert one string into another using dynamic programming.
 *
 * @param {string} word1 - The source string.
 * @param {string} word2 - The target string.
 * @returns {number} The minimum edit distance between the two strings.
 *
 * Time Complexity: O(m * n)
 *   m = word1.length
 *   n = word2.length
 *
 * Space Complexity: O(m * n)
 *   DP table storing distances for all suffix pairs.
 */
function edit(word1, word2) {
    let dp = new Array(word1.length + 1)
        .fill(0)
        .map(() => new Array(word2.length + 1).fill(0));

    for (let j = 0; j <= word2.length; j++) {
        dp[word1.length][j] = word2.length - j;
    }

    for (let i = 0; i <= word1.length; i++) {
        dp[i][word2.length] = word1.length - i;
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = 1 + Math.min(
                dp[i][j + 1],     // insert
                dp[i + 1][j],     // delete
                dp[i + 1][j + 1]  // replace
                );
            }
        }
    }

    return dp[0][0];
}

let word1 = "horse", word2 = "ros" 
console.log(edit(word1, word2))