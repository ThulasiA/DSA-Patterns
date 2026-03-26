/**
 * Compresses an array of characters in-place using run-length encoding.
 *
 * Consecutive repeating characters are replaced with:
 *   - the character itself
 *   - followed by its count (only if count > 1)
 *
 * Example:
 *   ["a","a","b","b","c","c","c"]
 *   becomes → ["a","2","b","2","c","3"]
 *
 * Uses a two-pointer technique:
 * - `read` scans through the array
 * - `write` overwrites the array with the compressed form
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) in-place
 * 
 * https://leetcode.com/problems/string-compression/description/
 * 
 * @param {string[]} chars
 *   The array of characters to compress in-place.
 *
 * @returns {number}
 *   The new length of the compressed array.
 */

function compress(chars) {
    let read = 0
    let write = 0

    while(read < chars.length) {
        let char = chars[read]
        let count = 0

        while(read < chars.length && chars[read] === char) {
            count++
            read++
        }

        chars[write] = char
        write++

        if(count > 1) {
            for(let digit of String(count)) {
                chars[write] = digit
                write++
            }
        }

    }
    return chars.slice(0, write)
}

const chars = ["a","a","b","b","c","c","c"] 
console.log(compress(chars))