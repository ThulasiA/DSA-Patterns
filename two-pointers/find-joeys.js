// https://cassidoo.co/newsletter/2026-11-15/

function isJoey(word, synonym) {
    if (word.length <= synonym.length) return false;

    let i = 0;
    let j = 0;

    while (i < word.length && j < synonym.length) {
        if (word[i] === synonym[j]) {
            j++;
        }
        i++;
    }

    return j === synonym.length;
}
function findJoeys(word, wordList) {
    let joeys = [];

    for (const joey of wordList) {
        if (isJoey(word, joey)) {
            joeys.push(joey);
        }
    }
    return joeys;
}

console.log(findJoeys("blossom", ["flower", "bloom"])); // [bloom]
console.log(findJoeys("chocolate", ["cocoa", "candy"])); // [cocoa]
