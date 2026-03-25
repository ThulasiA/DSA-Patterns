/**
 * Computes the maximum amount of money that can be robbed from a line of houses
 * without robbing two adjacent houses, which would trigger an alarm.
 *
 * This uses a classic dynamic programming approach:
 * - dp[i] represents the maximum money that can be robbed from houses 0..i.
 * - For each house:
 *     - Either rob it (nums[i] + dp[i-2])
 *     - Or skip it (dp[i-1])
 * - The recurrence is:
 *     dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) optimized (using two rolling variables)
 * https://leetcode.com/problems/house-robber/description/
 *
 * @param {number[]} nums
 *   Array where nums[i] is the amount of money in the ith house.
 *
 * @returns {number}
 *   The maximum amount of money that can be robbed without alerting the police.
 */
function houseRobber(nums) {
  let n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]

  let dp = new Array(n).fill(0) 

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for ( let i = 2; i < n; i++ ) {
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
  }

  return dp[n -1]
}

console.log(houseRobber([2,9,8,3,6]))

// You are given an integer array nums where nums[i] represents the amount of money the ith house has. The houses are arranged in a circle, i.e. the first house and the last house are neighbors.

// You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.

// Return the maximum amount of money you can rob without alerting the police.

// Example 1:

// Input: nums = [3,4,3]

// Output: 4
// Explanation: You cannot rob nums[0] + nums[2] = 6 because nums[0] and nums[2] are adjacent houses. The maximum you can rob is nums[1] = 4.

// Example 2:

// Input: nums = [2,9,8,3,6]

// Output: 15
// Explanation: You cannot rob nums[0] + nums[2] + nums[4] = 16 because nums[0] and nums[4] are adjacent houses. The maximum you can rob is nums[1] + nums[4] = 15.

function houseRobberTwo(nums) {
  let arr1 = nums.slice(0, - 1)
  let arr2 = nums.slice(1)

  let res = Math.max(houseRobber(arr1), houseRobber(arr2))
  return res
}


console.log(houseRobberTwo([2,9,8,3,6]))
console.log(houseRobberTwo([3,4,3]))