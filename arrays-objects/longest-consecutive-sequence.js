/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 * 
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {

        if (!numSet.has(num - 1)) {
            let streak = 1;
            while (numSet.has(num + streak)) {
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}

const nums = [2, 20, 4, 10, 3, 4, 5];
const nums1 = [0, 3, 2, 5, 4, 6, 1, 1];
console.log(longestConsecutive(nums));