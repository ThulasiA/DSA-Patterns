/**
 * Finds the length of the longest subsequence in nums such that
 * every pair of adjacent elements in the subsequence are coprime
 * (i.e., gcd(nums[i], nums[j]) === 1).
 * 
 * https://buttondown.com/cassidoo/archive/u1fa96-focus-on-things-that-are-small-enough-to/
 *
 * @param {number[]} nums - Array of integers.
 * @returns {number} Length of the longest coprime subsequence.
 */

function longestCoprimeSubsequence(nums) {
    let n = nums.length;
    if (n === 0) return 0;

    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (gcd(nums[i], nums[j]) === 1) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

function gcd(a, b) {
    while (b !== 0) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

console.log(longestCoprimeSubsequence([4, 3, 6, 9, 7, 2])); // 4
console.log(longestCoprimeSubsequence([6, 12, 4, 8]));    // 1