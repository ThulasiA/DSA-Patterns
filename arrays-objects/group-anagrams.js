/**
 * Groups strings into lists of anagrams using a 26-length frequency signature.
 *
 * @param {string[]} strs - Array of input strings.
 * @returns {string[][]} A list of groups, where each group contains anagrams.
 *
 * Time Complexity: O(n * k)
 *   n = number of strings
 *   k = average string length
 *
 * Space Complexity: O(n * k)
 *   storage for grouped strings and their frequency signatures
 */

function groupAnagrams(strs) {
    const res = {}

    for(let str of strs) {
        const  count = new Array(26).fill(0)

        for(let c of str) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        const key = count.join('')
        if(!res[key]) {
            res[key] = []
        }
        res[key].push(str)
    }
    
    return Object.values(res)
}

const strs = ["act","pots","tops","cat","stop","hat"]
console.log(groupAnagrams(strs))