/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * Approach:
 * Use two passes:
 *   1. prefix[i] = product of all elements to the LEFT of i
 *   2. suffix[i] = product of all elements to the RIGHT of i
 *   3. result[i] = prefix[i] * suffix[i]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums - Input array of integers.
 * @returns {number[]} Array where each index contains product of all other elements.
 */

function productExceptSelf(nums) {
    let n = nums.length;
    let prefix = new Array(n);
    let suffix = new Array(n);
    let result = new Array(n);

    prefix[0] = 1;
    suffix[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
}

const nums = [1, 2, 4, 6];
console.log(productExceptSelf(nums));
// [48,24,12,8]