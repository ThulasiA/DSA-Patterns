/**
 * https://leetcode.com/problems/unique-paths/description/
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

function uniquePaths(m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[m - 1][n - 1] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) continue;

            let pathsDown = (i + 1 < m) ? dp[i + 1][j] : 0;
            let pathsRight = (j + 1 < n) ? dp[i][j + 1] : 0;
            dp[i][j] = pathsDown + pathsRight;

        }
    }
    return dp[0][0];
}

let m = 3, n = 6;
console.log(unique(m, n));