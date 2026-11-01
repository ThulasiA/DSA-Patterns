//https://cassidoo.co/newsletter/2026-10-25/

function halloweenSwap(costumes) {
    let n = costumes.length;
    let visited = new Array(n).fill(false);
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || costumes[i] === i) {
            continue;
        }

        let length = 0;
        let current = i;

        while (!visited[current]) {
            visited[current] = true;
            current = costumes[current];
            length++;
        }

        if (length > 1) {
            count += length - 1;
        }
    }

    return count;
}

console.log(halloweenSwap([2, 3, 4, 0, 1])); //4

// > halloweenSwap([0, 1, 2, 3])
// > 0

// > halloweenSwap([1, 2, 0])
// > 2

// > halloweenSwap([4, 3, 2, 1, 0])
// > 2
