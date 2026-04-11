/**
 * https://leetcode.com/problems/word-search/description/
 *
 * Time Complexity: O(m * 4^n)
 * Space Complexity: O(n)
 * Where m is the number of cells in the board, n - length of the word
 * 
 * @param {character[][]} board - 2D grid of characters.
 * @param {string} word - The target word to search for.
 * @returns {boolean} True if the word exists in the grid, else false.
 */

function wordSearch(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;

    const visited = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(false));

    const dfs = (r, c, i) => {
        if (i === word.length) return true;

        if (r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            board[r][c] !== word[i] ||
            visited[r][c]
        ) {
            return false;
        }

        visited[r][c] = true;
        const res =
            dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);
        visited[r][c] = false;

        return res;
    };

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}

let board = [
    ["A", "B", "C", "D"],
    ["S", "A", "A", "T"],
    ["A", "C", "A", "E"]
],
    word = "CAT";

console.log(wordSearch(board, word));