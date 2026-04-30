/**
 * Generates all subsets of nums where no two chosen elements
 * come from consecutive indices.
 *
 * nums is sorted and contains unique values.
 *
 * Example:
 *   [1,2,3] → [[],[1],[2],[3],[1,3]]
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) 
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */

function subsetsNoConsecutive(nums) {
    let res = [];

    const backtrack = (start, path, lastIndex) => {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (lastIndex === -1 || i > lastIndex + 1) {
                path.push(nums[i]);
                backtrack(i + 1, path, i);
                path.pop();
            }
        }
    };

    backtrack(0, [], -1);
    return res;
}

let nums = [1, 2, 3, 4];
console.log(subsetsNoConsecutive(nums));