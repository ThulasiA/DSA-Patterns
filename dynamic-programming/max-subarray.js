/**
* Given an integer array nums, find the subarray with the largest sum, and return its sum.
* Kadane's algorithm
* https://leetcode.com/problems/maximum-subarray/description/
* @param {number[]} nums
* @return {number}
*/

function maxSub(nums) {
    let currentSum = 0, maxSum = nums[0];

    for (let num of nums) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

let nums = [2, -3, 4, -2, 2, 1, -1, 4];
console.log(maxSub(nums));