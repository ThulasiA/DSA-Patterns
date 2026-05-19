/**
 * Given a string s consisting of letters, convert each character to its opposite case that is, 
 * change every lowercase letter to uppercase, and every uppercase letter to lowercase. 
 * Bonus: add an "alternate" parameter that converts the whole string to AlTeRnAtE cAsE!
 * 
 * https://buttondown.com/cassidoo/archive/u1f49c-technology-is-cool-but-youve-got-to-use-it/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} str - Input string to transform.
 * @param {boolean} [alternating=false] - Whether to apply alternating case.
 * @returns {string} The transformed string.
 */

function toggleChar(str, alternating = false) {
    let strArr = [...str];

    if (alternating) {
        let charCount = 0;
        for (let i = 0; i < strArr.length; i++) {
            if (/[a-zA-Z]/.test(strArr[i])) {
                if (charCount % 2 === 0) {
                    strArr[i] = strArr[i].toUpperCase();
                } else {
                    strArr[i] = strArr[i].toLowerCase();
                }
                charCount++;
            }
        }
        return strArr.join('');
    }

    for (let i = 0; i < strArr.length; i++) {
        if (isLower(strArr[i])) {
            strArr[i] = strArr[i].toUpperCase();
        } else {
            strArr[i] = strArr[i].toLowerCase();
        }
    }

    return strArr.join('');
}

function isLower(char) {
    return /[a-z]/.test(char);
}

let alternating = true;
console.log(toggleChar("Hello, world!")); // "hELLO, WORLD!"
console.log(toggleChar("HeheHeheHEheheHeH")); // "hEHEhEHEheHEHEhEh"
console.log(toggleChar("This will be alternated", alternating)); // "ThIs WiLl Be AlTeRnAtEd"