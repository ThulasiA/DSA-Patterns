/**
 * 
 * https://leetcode.com/problems/jump-game/description/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

function jumpGame(nums) {
    let n = nums.length;
    let goal = n - 1;

    for (let i = n - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
}

// const nums = [1,2,0,1,0]
// const nums2 = [3,2,1,0,4]
// console.log(jumpGame(nums))