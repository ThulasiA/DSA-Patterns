/**
 * The algorithm:
 *   1. Count actual characters in `s` and count wildcards.
 *   2. Count character frequencies in `pattern`.
 *   3. Binary search on k = number of copies of pattern.
 *   4. For each k, check if available characters + wildcards can satisfy
 *      the required character counts.
 * 
 * Given a string s containing letters and ? wildcards 
 * (that can match any letter), and a target pattern string pattern, 
 * rearrange the entire string however you like. Return the maximum number of 
 * non-overlapping copies of pattern that can appear in the rearranged result.
 * 
 * https://buttondown.com/cassidoo/archive/u1f9f0-after-all-is-said-and-done-more-is-said/
 *
 * @param {string} s - The source string containing letters and '?' wildcards.
 * @param {string} pattern - The pattern whose copies we want to form.
 * @returns {number} Maximum number of times the pattern can be formed.
 */

function maxPatternCopies(s, pattern) {
    let strCount = {};
    let wildCards = 0;
    for (const char of s) {
        if (char === '?') {
            wildCards++;
        } else {
            strCount[char] = (strCount[char] || 0) + 1;
        }
    }

    let patternCount = {};
    for (const char of pattern) {
        patternCount[char] = (patternCount[char] || 0) + 1;
    }

    let min = 0, max = Math.floor(s.length / pattern.length);
    let maxCount = 0;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (canForm(mid, strCount, patternCount, wildCards)) {
            maxCount = mid;
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    return maxCount;
}

function canForm(k, strCount, patternCount, wildcards) {
    let neededWildCards = 0;

    for (const char in patternCount) {
        let requiredChars = patternCount[char] * k;
        let availableChars = strCount[char] || 0;
        if (requiredChars >= availableChars) {
            neededWildCards += requiredChars - availableChars;
        }
    }

    return neededWildCards <= wildcards;
}

console.log(maxPatternCopies("abcabc???", "ac")); // 3
console.log(maxPatternCopies("aab??", "aab"));  // 1
console.log(maxPatternCopies("??????", "abc"));  // 2
