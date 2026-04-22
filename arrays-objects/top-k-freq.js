/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topFreq(nums, k) {
    let count = {};
    let freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    }

    let res = [];
    for (let i = freq.length - 1; i >= 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }

}

const nums = [1, 2, 2, 3, 3, 3], k = 2;
console.log(topFreq(nums, k)); // [2,3]