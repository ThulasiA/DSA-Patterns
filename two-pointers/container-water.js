/**
 * Computes the maximum amount of water that can be contained between
 * any two vertical bars represented in the `heights` array.
 * {https://leetcode.com/problems/container-with-most-water/description/}
 * 
 * Uses the optimal two‑pointer technique:
 * - Start with pointers at both ends
 * - Compute area formed by the two bars
 * - Move the pointer at the shorter bar inward
 * - Track the maximum area seen so far
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} heights - Array of non-negative integers where each value
 *   represents the height of a vertical bar.
 * @returns {number} The maximum water area that can be contained.
 */

function maxArea(heights) {
  let l = 0
  let r = heights.length - 1
  let maxWater = 0
  
  while(l < r) {
    const width = right - left
    const height = Math.min(heights[l], heights[r])
    const area = width * height

    maxWater = Math.max(maxWater, area)

    if(heights[l] < heights[r]) {
      l++
    } else {
      r--
    }
  }

  return maxWater

}