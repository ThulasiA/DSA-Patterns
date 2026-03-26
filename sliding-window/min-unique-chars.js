/**
 * Problem:
 * Given a string, return the length of the smallest substring that contains
 * all unique characters from the original string at least once.
 *
 * Examples:
 *   Input:  "aabcbcdbca"
 *   Output: 4   // "dbca"
 *
 *   Input:  "aaab"
 *   Output: 2   // "ab"
 *
 * Approach:
 * Use a sliding window with a frequency map:
 * - Count how many unique characters exist in the string.
 * - Expand the window until it contains all unique characters.
 * - Shrink the window from the left to find the minimum valid window.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k), where k is the number of unique characters.
 *
 * @param {string} str - The input string.
 * @returns {number} The length of the smallest substring containing all unique characters.
 */


function smallWindow(s) {
    let l = 0
    let minLen = Infinity
    let map = new Map()
    let charSet = new Set(s)
    let formed = 0
    
    for (let r = 0; r < s.length; r++) {
        let char = s[r]

        map.set(char, (map.get(char) || 0) + 1)
        if(map.get(char) === 1) {
            formed++
        }
        while(formed === charSet.size) {
            minLen = Math.min(minLen, r - l + 1)

            let leftChar = s[l]
            map.set(leftChar, map.get(leftChar) - 1)
            if(map.get(leftChar) === 0) formed--

            l++;
        }
    }

    return minLen === Infinity ? 0 : minLen
}

const s = "aabcbcdbca"
console.log(smallWindow(s))