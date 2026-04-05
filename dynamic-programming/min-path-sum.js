/**
 * https://leetcode.com/problems/minimum-path-sum/description/
 * 
 * @param {number[][]} grid
 * @return {number}
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

function minPathSum(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;

    let dp = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(Infinity));
    dp[ROWS - 1][COLS] = 0;
    for (let i = ROWS - 1; i >= 0; i--) {
        for (let j = COLS - 1; j >= 0; j--) {
            dp[i][j] = grid[i][j] + Math.min(dp[i][j + 1], dp[i + 1][j]);
        }
    }
    return dp[0][0];
}


const grid = [
    [1, 2, 0],
    [5, 4, 2],
    [1, 1, 3]
];
console.log(minPathSum(grid))

