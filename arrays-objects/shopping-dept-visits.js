/**
 * Calculates how many department visits are saved by reorganizing a shopping trip.
 *
 * Given a list of products mapped to their departments and a shopping list,
 * this function compares:
 * 1. The number of department transitions when buying items in the given order.
 * 2. The number of transitions when grouping items by department (optimized).
 *
 * The difference between these two values is the number of department visits saved.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {Array<[string, string]>} products
 *   A list of tuples where each entry is [productName, departmentName].
 *
 * @param {string[]} list
 *   The shopping list in the order the user would normally buy items.
 *
 * @returns {number}
 *   The number of department visits eliminated by grouping items by department.
 */

function shopping(products, list) {
  let productsMap = new Map()

  for(let [product, dept] of products) {
    productsMap.set(product, dept)
  }

  let depts = list.map((item) => productsMap.get(item))

  let originalVisits = 0
  let prev = null

  for ( let dept of depts) {
    if(prev !== dept) {
      originalVisits++
      prev = dept
    }
  }

  let optimizedVisits = new Set(depts).size
  return originalVisits - optimizedVisits
}
