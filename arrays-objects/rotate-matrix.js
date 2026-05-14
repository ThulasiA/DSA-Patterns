/**
 * Rotates an n x n matrix 90 degrees clockwise in-place.
 *
 * https://leetcode.com/problems/rotate-image/description/
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param {number[][]} matrix - Square n x n matrix to rotate.
 * @returns {number[][]} The same matrix, rotated 90 degrees clockwise.
 */

function rotate(matrix) {
    const ROWS = matrix.length;
    matrix.reverse();

    for (let i = 0; i < ROWS; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    return matrix;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotate(matrix));
//[ [7,4,1],
// [8,5,2],
// [9,6,3] ]

