/**
 * Decodes an encoded string where patterns follow the form k[encoded_string],
 * meaning the substring inside the brackets should be repeated k times.
 * https://leetcode.com/problems/decode-string/description/ 
 *
 * Supports nested encodings such as "3[a2[c]]" → "accaccacc".
 *
 * Uses a stack-based parsing approach:
 * - Iterate through characters
 * - Push numbers, letters, and '[' onto the stack
 * - When encountering ']', pop until '[' to build the substring
 * - Repeat the substring k times and push back onto the stack
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 *   The encoded input string.
 *
 * @returns {string}
 *   The fully decoded string.
 */

function decodeString(s) {
    let countStack = []
    let stringStack = []
    let currentStr = ''
    let k = 0
    for(let char of s) {
        if(!isNaN(char)) {
            k = k * 10 + Number(char)
        }
        else if(char === '[') {
            countStack.push(k)
            stringStack.push(currentStr)
            currentStr = ''
            k = 0
        } 
        else if(char === ']') {
            let repeatTimes = countStack.pop()
            let lastString = stringStack.pop()

            currentStr = lastString + currentStr.repeat(repeatTimes)
        }
        else {
            currentStr += char
        }
    }
    return currentStr
}

const s =  "3[a2[c]]"
console.log(decodeString(s))