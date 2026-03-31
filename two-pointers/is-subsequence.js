/**
 * Problem:
 * Determine whether string `s` is a subsequence of string `t`.
 * A subsequence preserves order but does NOT require contiguity.
 * https://leetcode.com/problems/is-subsequence/description/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s - The string to check as a subsequence.
 * @param {string} t - The target string to scan through.
 * @returns {boolean} True if `s` is a subsequence of `t`, otherwise false.
 */

function isSubsequence(s, t) {
  let l = 0;

  for (let r = 0; r < t.length && l < s.length; r++) {
    if (s[l] === t[r]) {
      l++;
    }
  }

  return l === s.length;
}

let s = "abc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
