/**
 * Calculates the minimum number of days required to make `m` bouquets,
 * where each bouquet needs `k` adjacent flowers.
 *
 * {@link https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/ | Minimum Days to Make Bouquets}
 *
 * @param {number[]} bloomDay - Array where bloomDay[i] is the day the i-th flower blooms.
 * @param {number} m - Number of bouquets required.
 * @param {number} k - Number of adjacent flowers needed per bouquet.
 * @returns {number} Minimum number of days needed, or -1 if impossible.
 *
 * @example
 * // returns 3
 * minDays([1,10,3,10,2], 3, 1);
 *
 * @example
 * // returns -1
 * minDays([1,10,3,10,2], 3, 2);
 */

function minDays(bloomDay, m, k) {
  const totalFlowers = bloomDay.length;
  if (totalFlowers < m * k) return -1;

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  function canMakeBouquets(day) {
    let bouquets = 0;
    let flowers = 0;

    for (const bloom of bloomDay) {
      if (bloom <= day) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0;
        }
      } else {
        flowers = 0;
      }
    }

    return bouquets >= m;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (canMakeBouquets(mid)) {
      high = mid;        // mid works, try earlier days
    } else {
      low = mid + 1;     // mid doesn't work, need more days
    }
  }

  return low;
}