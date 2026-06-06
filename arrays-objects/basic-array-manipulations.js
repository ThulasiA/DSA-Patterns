// Given an array a, return an array b of the same length by applying the following rule: 
//  b[i] = a[i - 1] + a[i] + a[i + 1]
// – If an element in the sum does not exist, use 0 in its place

function sumOfAdjacents(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = (arr[i - 1] ?? 0) + arr[i] + (arr[i + 1] ?? 0);
    }
    return res;
}

const arr = [4, 0, 1, -2, 3];
console.log(sumOfAdjacents(arr));
