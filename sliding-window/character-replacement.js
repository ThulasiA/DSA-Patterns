/**
 * Finds the length of the longest substring that can be turned into a substring
 * of a single repeated character after performing at most k replacements.
 *
 * @param {string} s - The input string.
 * @param {number} k - Maximum number of allowed character replacements.
 * @returns {number} The maximum length of a valid substring.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) — at most 26 character counts are stored.
 */

function characterReplacement(s, k) {
    let l = 0
    let res = 0
    let maxFreq = 0
    let map = new Map()

    for(let r = 0; r < s.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1)
        maxFreq = Math.max(maxFreq, map.get(s[r]))

        while(r - l + 1 - maxFreq > k) {
            map.set(s[l], map.get(s[l]) - 1)
            l++
        }
        res = Math.max(res, r - l + 1)
    }

    return res
}


console.log(characterReplacement("XYYX", 2))