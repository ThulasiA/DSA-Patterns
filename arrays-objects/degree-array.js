/**
 * Computes the length of the smallest contiguous subarray that has the same
 * degree as the entire input array.
 *
 * The "degree" of an array is the maximum frequency of any element.
 * To match this degree, a subarray must contain all occurrences of at least
 * one element that appears with this maximum frequency.
 *
 * Approach:
 * - Track for each number:
 *   - its total frequency
 *   - its first occurrence index
 *   - its last occurrence index
 * - Determine the degree of the array (max frequency)
 * - For every number whose frequency equals the degree, compute the window
 *   spanning from its first to last occurrence
 * - Return the smallest such window length
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * https://leetcode.com/problems/degree-of-an-array/description/
 * 
 * @param {number[]} nums - A non-empty array of non-negative integers.
 * @returns {number} The minimum length of a contiguous subarray whose degree
 *   matches the degree of the entire array.
 */


function findShortestSubArray(nums) {
  const count = new Map()
  const first = new Map()
  const last = new Map()
  
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    count.set(num, (count.get(num) || 0) + 1)

    if(!first.has(num)) {
      first.set(num, i)
    }

    last.set(num, i)
  }

  let degree = Math.max(...count.values())

  let minLength = nums.length
  for (let [num, freq] of count.entries()) {
    if (freq === degree) {
      const length = last.get(num) - first.get(num) + 1;
      minLength = Math.min(minLength, length);
    }
  }

  return minLength
}

const nums = [1,2,2,3,1,4,2]
console.log(findShortestSubArray(nums))