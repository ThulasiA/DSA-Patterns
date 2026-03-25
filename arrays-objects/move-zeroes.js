/**
 * Moves all zeros in the array to the end while preserving the relative order
 * of non-zero elements. The operation is performed in-place without creating
 * a copy of the array.
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - The array of integers to be modified in-place.
 * @returns {number[]} The same array instance with zeros moved to the end.
 */

function moveZeroes(nums) {
    let insertPos = 0

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        nums[insertPos] = nums[i]
        insertPos++
      }
    }

    while(insertPos < nums.length) {
      nums[insertPos] = 0
      insertPos++
    }

    return nums
}

let nums = [0,1,0,3,12]
console.log(moveZeroes(nums))
