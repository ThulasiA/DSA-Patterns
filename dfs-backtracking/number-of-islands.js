/**
 * 
 * https://leetcode.com/problems/number-of-islands/
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) worst case
 *   
 * @param {string[][]} grid - 2D grid of '1' (land) and '0' (water).
 * @returns {number} Number of islands in the grid.
 */

function numOfIslands(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    let islands = 0;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    const dfs = (r, c) => {
        if (r < 0 || c < 0 ||
            r >= ROWS || c >= COLS ||
            grid[r][c] === '0') return;

        grid[r][c] = '0';

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    };

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                islands++;
            }
        }
    }

    return islands;
}

// Example 1:

// Input: grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1
// Example 2:

// Input: grid = [
//     ["1","1","0","0","1"],
//     ["1","1","0","0","1"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// Output: 4