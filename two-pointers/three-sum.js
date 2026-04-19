/**
 * https://leetcode.com/problems/3sum/description/
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1) 
 *
 * @param {number[]} nums - Input array of integers.
 * @returns {number[][]} All unique triplets that sum to zero.
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }

    }
    return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));