/**
 * Determines the minimum number of suitcases required to pack all items,
 * given each suitcase's capacity. Each item must fit entirely inside a
 * single suitcase. Suitcases cannot exceed their capacity.
 *
 * @param {number[]} weights - List of item weights to pack.
 * @param {number[]} suitcases - List of suitcase capacities.
 * @returns {number} Minimum number of suitcases needed, or -1 if impossible.
 */

function packSuitcases(weights, suitcases) {
    weights.sort((a, b) => b - a);
    suitcases.sort((a, b) => b - a);

    let minSuitcasesUsed = Infinity;
    let suitcasesUsed = new Array(suitcases.length).fill(false);

    let currentCapacities = [...suitcases];

    const dfs = (weightsIndex) => {
        let currentObject = weights[weightsIndex];
        //base case
        if (weightsIndex === weights.length) {
            let filledUpSuitcases = suitcasesUsed.filter(Boolean).length;
            minSuitcasesUsed = Math.min(filledUpSuitcases, minSuitcasesUsed);
            return;
        }

        for (let i = 0; i < currentCapacities.length; i++) {
            if (currentCapacities[i] >= currentObject) {
                let previouslyUsed = suitcasesUsed[i];
                currentCapacities[i] -= currentObject;
                suitcasesUsed[i] = true;

                dfs(weightsIndex + 1);

                currentCapacities[i] += currentObject;
                suitcasesUsed[i] = previouslyUsed;
            }
        }
    };
    dfs(0);
    return minSuitcasesUsed === Infinity ? -1 : minSuitcasesUsed;
}

console.log(packSuitcases([4, 8, 1, 4, 2], [10, 6, 8])); // 3