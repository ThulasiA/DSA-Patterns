/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string.
 * @returns {number} The maximum length of a substring with all unique characters.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the size of the character set in the window.
 */

function lengthOfLongestSubstring(s) {
    let l = 0
    let maxLen = 0
    let charSet = new Set()

    for(let r = 0; r < s.length; r++) {
        while(charSet.has(s[r])) {
            charSet.delete(s[l])
            l++
        }
        charSet.add(s[r])
        maxLen = Math.max(maxLen, r - l + 1)
    }
    
    return maxLen
}

let s = "zxyzxyz"
console.log(lengthOfLongestSubstring(s))