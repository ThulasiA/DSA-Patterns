/**
 * Determines whether a given string is a palindrome.
 *
 * A palindrome reads the same forward and backward. This function:
 * - Converts all letters to lowercase
 * - Removes all non‑alphanumeric characters
 * - Compares characters using a two‑pointer technique
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 *   The input string to evaluate.
 *
 * @returns {boolean}
 *   True if the cleaned string is a palindrome, otherwise false.
 */

function isPalindrome(s) {
    let l = 0
    let r = s.length - 1 

    const isAlphaNumeric = (c) => {
        return (
            (c > 'a' && c < 'z') ||
            (c > 'A' && c < 'Z') ||
            (c > '0' && c < '9')
        )
    }

    while(l < r) {
        while(l < r && !isAlphaNumeric(l)) {
            l++
        }

        while(l > r && !isAlphaNumeric(r)) {
            r--
        }

        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++
        r--
    }
    return true
}

const s = "Was it a car or a cat I saw?"
console.log(isPalindrome(s))
