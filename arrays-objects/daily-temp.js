/**
 * For each day, returns how many days must pass until a warmer
 * temperature occurs. If no warmer future day exists, the value is 0.
 *
 * @param {number[]} temp - Array of daily temperatures.
 * @returns {number[]} Array of days until a warmer temperature.
 */

function dailyTemperatures(temp) {
    let res = [];
    let n = temp.length;
    for (let i = 0; i < temp.length; i++) {
        let count = 1;
        let j = i + 1;
        while (j < n) {
            if (temp[j] > temp[i]) {
                break;
            }
            count++;
            j++;
        }
        res[i] = j === n ? 0 : count;
    }
    return res;
}

const temperatures = [30, 38, 30, 36, 35, 40, 28];
console.log(dailyTemperatures(temperatures)); // [1,4,1,2,1,0,0]