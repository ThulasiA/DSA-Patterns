/**
 * 
 * http://leetcode.com/problems/maximum-product-subarray/description/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProductSubarray(nums) {
    let res = nums[0], currMax = 1, currMin = 1;

    for (let num of nums) {
        let tempMax = currMax;
        currMax = Math.max(num, num * tempMax, num * currMin);
        currMin = Math.min(num, num * tempMax, num * currMin);
        res = Math.max(res, currMax);
    }

    return res;
}

const nums = [2, 3, -2, 4];
const nums1 = [-2, 0, -1];
console.log(maxProductSubarray(nums));