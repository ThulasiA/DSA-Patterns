/**
 * Problem:
 * A bookstore owner is sometimes grumpy. During grumpy minutes, customers
 * entering the store are NOT satisfied. The owner can use a secret technique
 * to stay not-grumpy for a fixed number of consecutive minutes (once only).
 * 
 * https://leetcode.com/problems/grumpy-bookstore-owner/description/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} customers - Number of customers arriving each minute.
 * @param {number[]} grumpy - 1 if owner is grumpy at that minute, else 0.
 * @param {number} minutes - Duration of the secret technique.
 * @returns {number} Maximum number of satisfied customers.
 */

function grumpyOwner(customers, grumpy, minutes) {
    let l = 0, satisfied = 0;
    let window = 0, maxWindow = 0;

    for (let r = 0; r < customers.length; r++) {
        if (grumpy[r] === 1) {
            window += customers[r];
        } else {
            satisfied += customers[r];
        }

        if (r - l + 1 > minutes) {
            if (grumpy[l] === 1) {
                window -= customers[l];
            }
            l++;
        }

        maxWindow = Math.max(window, maxWindow);
    }

    return satisfied + maxWindow;
}

let customers = [1, 0, 1, 2, 1, 1, 7, 5], grumpy = [0, 1, 0, 1, 0, 1, 0, 1], minutes = 3;
console.log(grumpyOwner(customers, grumpy, minutes));
