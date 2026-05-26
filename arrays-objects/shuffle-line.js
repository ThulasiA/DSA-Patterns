/**
 * Reorders a queue of customer names by moving every nth customer
 * to the end of the line while preserving the relative order of:
 *   - customers who stay in the main line
 *   - customers who are moved to the end
 *
 * Example:
 *   shuffleLine(["Ada","Ben","Cam","Diya","Eli","Fay"], 3)
 *   → ["Ada","Ben","Diya","Eli","Cam","Fay"]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string[]} queue - List of customer names.
 * @param {number} n - Every nth customer is moved to the end.
 * @returns {string[]} New queue with reordered customers.
 */

function shuffleLine(customers, n) {
    if (n <= 1) return customers;

    let stayed = [];
    let moved = [];
    for (let i = 0; i < customers.length; i++) {
        let shuffleIndex = ((i + 1) % n);
        if (shuffleIndex === 0) {
            moved.push(customers[i]);
        } else {
            stayed.push(customers[i]);
        }
    }
    return [...stayed, ...moved];
}


console.log(shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3));
//["Ada","Ben","Diya","Eli","Cam","Fay"]

console.log(shuffleLine(["Mo", "Noah", "Oli"], 1));
//["Mo", "Noah", "Oli"]