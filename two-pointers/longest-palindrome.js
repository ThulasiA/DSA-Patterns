/**
 * Finds the longest palindromic substring within a given string.
 *
 * Expands around every possible center (both odd and even length palindromes)
 * and tracks the maximum window found.
 * 
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * 
 * @param {string} s - The input string.
 * @returns {string} The longest palindromic substring.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */


function longestPalindrome(s) {
    let start = 0
    let maxLen = 0

    const expand = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLen = right - left + 1

            if(currentLen > maxLen) {
                start = left
                maxLen = currentLen
            }

            left--
            right++
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        expand(i,i)
        expand(i, i + 1)
    }

    return s.substring(start, start + maxLen)
}

let s = "babad"
console.log(longestPalindrome(s))