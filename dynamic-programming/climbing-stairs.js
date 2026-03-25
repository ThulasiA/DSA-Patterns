/**
 * Computes the number of distinct ways to climb to the top of a staircase
 * where each move allows either 1 or 2 steps.
 *
 * {@link https://leetcode.com/problems/climbing-stairs/description/ | Climbing Stairs}
 * @param {number} n - Total number of steps to reach the top.
 * @returns {number} Number of distinct ways to climb the staircase.
 *
 * @example
 * // returns 2
 * climbStairs(2);
 *
 * @example
 * // returns 3
 * climbStairs(3);
 */
function climbStairs(n) {
    if(n <= 2) return n

    let dp = new Array(n+1).fill(0)
    dp[1] = 1, dp[2] = 1

    for ( let i = 3; i <= n ; i++ ) {
        dp[i] = dp[i-1] + dp[i -2]
    }

    return dp[n]
}

/**
 * Computes the minimum cost required to reach the top of a staircase,
 * where each step has an associated cost and you may climb either
 * 1 or 2 steps at a time.
 *
 * {@link https://leetcode.com/problems/min-cost-climbing-stairs/description/ | Min Cost Climbing Stairs}
 *
 * @param {number[]} cost - An array where cost[i] represents the cost of stepping on stair i.
 * @returns {number} The minimum total cost to reach the top of the staircase.
 *
 * @example
 * // returns 15
 * minCostClimbingStairs([10, 15, 20]);
 *
 * @example
 * // returns 2
 * minCostClimbingStairs([1, 100, 1, 1]);
 */
function minCostClimbingStairs(cost) {
    let n = cost.length
    let dp = new Array(n+1).fill(0)

    for(let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }

    return dp[n]
}