/**
 * Computes the minimum number of coins required to make up a given amount.
 *
 * You may use unlimited quantities of each coin denomination.
 * If the amount cannot be formed using the given coins, the function returns -1.
 *
 * This uses a classic bottom‑up Dynamic Programming approach:
 * - dp[i] represents the minimum coins needed to form amount i.
 * - Initialize dp with a large sentinel value (amount + 1).
 * - For each amount from 1 → target, try all coins and update dp[i].
 *
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 * https://leetcode.com/problems/coin-change/description/
 * @param {number[]} coins
 *   Array of coin denominations (positive integers).
 *
 * @param {number} amount
 *   The target amount to form.
 *
 * @returns {number}
 *   The minimum number of coins needed, or -1 if impossible.
 */


function coinChange(coins, amount) {
  // DP problem 

  let dp = new Array(amount+1).fill(amount+1)
  dp[0] = 0

  for ( let i = 1; i <= amount; i++) {
    for(let j = 0; j < coins.length; j++) {
      if(coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}


console.log(coinChange([1,5,10], 12))