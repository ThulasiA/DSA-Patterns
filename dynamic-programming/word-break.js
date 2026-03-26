/**
 * Determines whether a string can be segmented into a sequence of valid words.
 *
 * Uses bottom‑up dynamic programming
 * https://leetcode.com/problems/word-break/description/
 * Time Complexity: O(n * m)  
 *   n = length of string  
 *   m = number of words (worst‑case substring comparisons)
 *
 * Space Complexity: O(n)
 *
 * @param {string} s
 *   The input string to test for valid segmentation.
 *
 * @param {string[]} strs
 *   List of valid dictionary words.
 *
 * @returns {boolean}
 *   True if the string can be segmented into dictionary words, otherwise false.
 */

function wordBreak(s, strs) {
    let dp = new Array(s.length + 1).fill(false)

    dp[s.length] = true

    for(let i = s.length - 1; i >= 0; i--) {
        for(let word of strs) {
            if(i+word.length <= s.length &&
                s.slice(i, i + word.length) === word
            ) {
                dp[i] = dp[i + word.length]
            }
            if(dp[i]) {
                break
            }
        }
    }
    return dp[0]
}

const s = "leetcode"
const strs = ["leet", "code"]
console.log(wordBreak(s, strs))