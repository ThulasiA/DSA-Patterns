// https://cassidoo.co/newsletter/2026-10-18/

// Given a string you typed (with the ghost),
// # deletes the last character and ~ duplicates it,
// if one exists. Return the final text.

function ghostwriter(str) {
    let stack = [];
    for (const char of str) {
        if (char === "#") {
            stack.pop();
        } else if (char === "~") {
            if (stack.length !== 0) {
                stack.push(stack.at(-1));
            }
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
}

console.log(ghostwriter("ghost"));
console.log(ghostwriter("BBB##O~"));
console.log(ghostwriter("ab~c#"));
console.log(ghostwriter("a#~b"));
