/**
 * @param {string} text1 - The first input string.
 * @param {string} text2 - The second input string.
 * @returns {number} The length of the longest common subsequence.
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(min(m, n)) using 1D DP optimization.
 * https://leetcode.com/problems/longest-common-subsequence/description/
*/

function longestCommonSubsequence(text1, text2) {
    if(text1.length < text2.length) {
        [text1, text2] = [text2, text1]
    }
    let dp = new Array(text2.length + 1).fill(0)

    for( let i = text1.length - 1; i >= 0; i--) {
        let prev = 0
        for( let j = text2.length - 1; j >= 0; j--) {
            let temp = dp[j]
            if(text1[i] === text2[j]) {
            dp[j] = 1 + prev
            } 
            else {
            dp[j] = Math.max(dp[j],  dp[j + 1])
            }
            prev = temp
        }
    }

    return dp[0]
}


let text1 = "abcde", text2 = "ace" 
console.log(longestCommonSubsequence(text1, text2))