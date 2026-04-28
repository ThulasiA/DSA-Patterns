/**
 * 
 * //https://leetcode.com/problems/permutations/
 * 
 * Time Complexity: O(n! * n)
 * Space Complexity: O(n! * n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */

function permutations(nums) {
    let res = [];
    let perm = [];
    let visited = Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);

    const dfs = () => {
        if (perm.length === nums.length) {
            res.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i] ||
                (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])
            ) continue;

            perm.push(nums[i]);
            visited[i] = true;
            dfs(perm);
            perm.pop();
            visited[i] = false;

        }
    };

    dfs();
    return res;
}

console.log(permutations([1, 2, 3]));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permutations([1, 1, 3]));
// [ [ 1, 1, 3 ], [ 1, 3, 1 ], [ 3, 1, 1 ] ]

/**
 * 
 * Given an array nums of distinct integers and an integer k, 
 * return all possible permutations of k elements from nums. 
 * You can return the answer in any order. 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */

function genKPermutations(nums, k) {
    const res = [];
    const visited = new Array(nums.length).fill(false);

    const backtrack = (perm) => {
        if (perm.length === k) {
            res.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            perm.push(nums[i]);
            backtrack(perm);
            perm.pop();
            visited[i] = false;
        }
    };

    backtrack([]);
    return res;
}

let nums = [1, 2, 3], k = 2;
// [[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]] 

let nums1 = [0, 1], k1 = 1;
// Output: [[0],[1]] 
console.log(genKPermutations(nums, k));
