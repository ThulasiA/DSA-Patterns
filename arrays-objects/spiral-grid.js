//https://buttondown.com/cassidoo/archive/u1f420-the-most-meaningful-way-to-succeed-is-to/

function spiralGrid(n) {
    if (n < 0) return;

    const gridSize = Math.ceil(Math.sqrt(n + 1));
    const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

    let left = 0;
    let top = 0;
    let right = gridSize - 1;
    let bottom = gridSize - 1;
    let currentVal = 0;

    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            if (currentVal <= n) {
                grid[top][col] = currentVal;
                currentVal++;
            }
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            if (currentVal <= n) {
                grid[row][right] = currentVal;
                currentVal++;
            }
        }
        right--;

        for (let col = right; col >= left; col--) {
            if (currentVal <= n) {
                grid[bottom][col] = currentVal;
                currentVal++;
            }
        }
        bottom--;

        for (let row = bottom; row >= top; row--) {
            if (currentVal <= n) {
                grid[row][left] = currentVal;
                currentVal++;
            }
        }
        left++;
    }

    console.log(grid);

    // Format the grid 
    let maxDigits = String(n).length;

    for (let i = 0; i < gridSize; i++) {
        const row = grid[i]
            .map((num) => {
                let strVal = num !== '' ? String(num) : '';
                return strVal.padStart(maxDigits, ' ');
            })
            .join(' ');
        console.log(row);
    }
}

console.log(spiralGrid(8)); // [ [ 0, 1, 2 ], [ 7, 8, 3 ], [ 6, 5, 4 ] ]
// 0 1 2
// 7 8 3
// 6 5 4
console.log(spiralGrid(30));
//  0  1  2  3  4  5
// 19 20 21 22 23  6
// 18          24  7
// 17 30       25  8
// 16 29 28 27 26  9
// 15 14 13 12 11 10
