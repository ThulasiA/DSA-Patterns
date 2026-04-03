/**
 * @param {number[]} prices
 * @return {number}
 */

function buySellStock(prices) {
    let n = prices.length;
    let dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][0] = Math.max(dp[i + 1][0], dp[i + 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i + 1][1], dp[i + 1][0] + prices[i]);
    }
    return dp[0][0];
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(buySellStock(prices));