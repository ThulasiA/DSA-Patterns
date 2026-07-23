/**
 * https://buttondown.com/cassidoo/archive/u1f94f-you-cant-achieve-anything-in-life-without/
 * 
 * Computes the maximum number of non-blink characters between
 * consecutive blink markers ("_") in a string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} str - Input string containing blink markers.
 * @returns {number} Maximum gap between consecutive blinks.
 */

function countBlinks(str) {
    let maxCount = 0;
    let blink = "_";
    let prevIndex = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === blink) {
            if (prevIndex !== -1) {
                let gap = i - prevIndex - 1;
                maxCount = Math.max(maxCount, gap);
            }
            prevIndex = i;
        }
    }
    return maxCount;
}

countBlinks("_..__...._."); // 4
countBlinks("...._"); // 0