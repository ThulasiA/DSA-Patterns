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

// https://leetcode.com/problems/jump-game-ii/description/

function jumpGameTwo(nums) {
    let res = 0;
    let l = 0;
    let r = 0;

    while (r < nums.length - 1) {
        let farthest = 0;
        for (let i = 0; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        l = r + 1;
        r = farthest;
        res++;
    }

    return res;
}

//const nums = [2,4,1,1,1,1]
//console.log(jumpGameTwo(nums)) // 2