/**
 * Returns all elements of a 2D matrix in clockwise spiral order.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(1) 
 *
 * @param {number[][]} matrix - 2D array of numbers.
 * @returns {number[]} Elements in clockwise spiral order.
 */

function spiralMatrix(matrix) {
    let res = [];

    let left = 0; // first col
    let right = matrix[0].length; // last col
    let top = 0; // first row
    let bottom = matrix.length; //last row

    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1]);
        }
        right--;

        if (!(left < right && top < bottom)) {
            break;
        }
        for (let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom - 1][i]);
        }
        bottom--;

        for (let i = bottom - 1; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(spiralMatrix(matrix));
// [1,2,3,6,9,8,7,4,5]

console.log(spiralMatrix(matrix1));
// [1,2,3,4,8,12,11,10,9,5,6,7]
