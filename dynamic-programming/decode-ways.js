/**
 * 
 * https://leetcode.com/problems/decode-ways/description/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s - The digit string to decode.
 * @returns {number} Number of valid decodings.
 */


function decodeWays(s) {
    let dp = new Array(s.length + 1).fill(0);
    dp[s.length] = 1;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0;
        }
        else {
            dp[i] = dp[i + 1];
            if (
                (i + 1) < s.length &&
                ((s[i] === '1') ||
                    (s[i] === '2' && s[i + 1] < '7'))
            ) {
                dp[i] += dp[i + 2];
            }
        }
    }
    return dp[0];
}

console.log(decodeWays("1012"));