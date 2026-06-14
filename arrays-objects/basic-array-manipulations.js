// Given an array a, return an array b of the same length by applying the following rule: 
//  b[i] = a[i - 1] + a[i] + a[i + 1]
// – If an element in the sum does not exist, use 0 in its place

function sumOfAdjacents(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = (arr[i - 1] ?? 0) + arr[i] + (arr[i + 1] ?? 0);
    }
    return res;
}

const arr = [4, 0, 1, -2, 3];
console.log(sumOfAdjacents(arr));

// You are given two strings: pattern and source. The first string pattern contains only the symbols 0 and 1, and the second string source contains only lowercase English letters. Return the number of substrings of source that match pattern. 

// A substring source[l..r] matches pattern if the following three conditions are met:
// – The pattern and substring are equal in length.
// – Where there is a 0 in the pattern, there is a vowel in the substring. 
// – Where there is a 1 in the pattern, there is a consonant in the substring. 

// Vowels are ‘a‘, ‘e‘, ‘i‘, ‘o‘, ‘u‘, and ‘y‘. All other letters are consonants.

// Example: For pattern = "010" and source = "amazing", the output should be 2.

function stringPattern(pattern, source) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    let matchCount = 0;
    let pLen = pattern.length;
    let sLen = source.length;

    for (let i = 0; i <= sLen - pLen; i++) {
        let isMatch = true;
        for (let j = 0; j < pLen; j++) {
            let char = source[i + j];
            let isVowel = vowels.has(char);

            if (pattern[j] === '0' && !isVowel) {
                isMatch = false;
                break;
            } else if (pattern[j] === '1' && isVowel) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            matchCount++;
        }
    }

    return matchCount;
}

let pattern = "010";
let source = "amazing";

console.log(stringPattern(pattern, source)); // 2