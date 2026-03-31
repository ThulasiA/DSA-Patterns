/**
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 * 
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let num of nums) {
        sum += num;
        let diff = sum - k;
        count += map.get(diff) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

let nums = [4, 4, 4, 4, 4, 4], k = 4;
console.log(subarraySum(nums, k))

