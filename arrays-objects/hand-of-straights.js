/**
 * https://leetcode.com/problems/hand-of-straights/
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} hand - List of card values.
 * @param {number} groupSize - Required size of each straight.
 * @returns {boolean} True if the hand can be fully partitioned into straights.
 * 
 */

function handOfStraights(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    let count = new Map();
    hand.forEach(
        (num) => count.set(num, (count.get(num) || 0) + 1)
    );

    for (let num of hand) {
        let start = num;

        while (count.get(start - 1) > 0) {
            start--;
        }

        while (start <= num) {
            while (count.get(start) > 0) {
                for (let i = start; i < start + groupSize; i++) {
                    if (!count.get(i)) return false;
                    count.set(i, count.get(i) - 1);
                }
            }
            start++;
        }
    }
    return true;
}

const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3;
const hand1 = [1, 2, 3, 4, 5], groupSize2 = 4;
console.log(handOfStraights(hand, groupSize)); // true
console.log(handOfStraights(hand1, groupSize1)); // false