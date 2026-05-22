/**
 * Given a grid of:
 *   0 = empty
 *   1 = fresh fruit
 *   2 = rotten fruit
 *
 * Each minute, any fresh fruit adjacent (up/down/left/right) to a rotten one
 * becomes rotten. Return the minimum minutes needed to rot all fruits.
 * If impossible, return -1.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 *
 * @param {number[][]} grid
 * @returns {number}
 */

function rottingFruit(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let fresh = 0;
    let time = 0;


    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    let directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];


    while (fresh > 0) {
        let flag = false;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    for (let [dr, dc] of directions) {
                        let row = r + dr;
                        let col = c + dc;

                        if (
                            row >= 0 &&
                            col >= 0 &&
                            row < ROWS &&
                            col < COLS &&
                            grid[row][col] === 1
                        ) {
                            grid[row][col] = 3;
                            fresh--;
                            flag = true;
                        }
                    }
                }
            }
        }

        if (!flag) return -1;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 3) {
                    grid[r][c] = 2;
                }
            }
        }

        time++;

    }
    return time;
}

const grid = [[1, 1, 0], [0, 1, 1], [0, 1, 2]];
console.log(rottingFruit(grid)); // 4