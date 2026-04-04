/**
 * @param {number[]} nums
 * @return {number}
 */

function lengthOfLIS(nums) {
    if (!nums.length) return 0;

    let dp = new Array(nums.length).fill(1);
    let maxLen = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
}

nums = [9, 1, 4, 2, 3, 3, 7];
console.log(lengthOfLIS(nums));