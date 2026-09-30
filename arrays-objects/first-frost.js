// https://buttondown.com/cassidoo/archive/u1f3b9-to-take-a-fine-idea-and-make-something/

function firstFrost(temps, drop) {
    const n = temps.length;
    const res = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (temps[i] - temps[j] >= drop) {
                res[i] = j - i;
                break;
            }
        }
    }

    return res;
}

console.log(firstFrost([70, 68, 72, 60, 65, 55], 5));
//[3, 2, 1, 2, 1, 0]

console.log(firstFrost([50, 49, 48], 5));
//[0, 0, 0]

console.log(firstFrost([40, 30, 45, 20], 10));
//[1, 2, 1, 0]
