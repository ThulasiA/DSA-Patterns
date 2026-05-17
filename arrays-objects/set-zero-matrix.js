
/**
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 * 
 * Time complexity: O(m∗n)
 * Space complexity: O(m+n)
 * 
 * @param {number[][]} matrix
 * @return {void}
 * 
 */

function setZeroes(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    let rowZero = Array(ROWS).fill(false);
    let colZero = Array(COLS).fill(false);

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (matrix[i][j] === 0) {
                rowZero[i] = true;
                colZero[j] = true;
            }
        }
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (rowZero[i] || colZero[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

const matrix = [
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8]
];

console.log(setZeroes(matrix));
// [
//   [1,0,3],
//   [0,0,0],
//   [6,0,8]
// ]