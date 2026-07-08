/**
 * https://buttondown.com/cassidoo/archive/u1f335-we-tell-ourselves-stories-in-order-to-live/
 * 
 * Time Complexity: O(size²)
 * Space Complexity: O(size²)
 *
 * @param {number} n - Number of rows in the grid.
 * @param {number} m - Number of columns in the grid.
 * @param {number} size - Side length of the impacted square region.
 * @param {number} r - Center row.
 * @param {number} c - Center column.
 * @returns {number[][]} List of impacted [row, col] coordinates.
 */

function getImpactedCoordinates(n, m, size, r, c) {
    let numberOfCells = Math.floor(size / 2); // 1
    let res = [];

    let startRow = Math.max(0, r - numberOfCells); // 0, 0
    let endRow = Math.min(n - 1, r + numberOfCells); // 4, 2
    let startCol = Math.max(0, c - numberOfCells); // 0, 0
    let endCol = Math.min(m - 1, c + numberOfCells); // 4, 2

    for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
            res.push([r, c]);
        }
    }

    return res;
}

console.log(getImpactedCoordinates(5, 5, 5, 1, 1));
// [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
