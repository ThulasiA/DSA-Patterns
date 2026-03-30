/**
 * Resolves an absolute path in a virtual file system that may contain symlinks.
 *
 * https://buttondown.com/cassidoo/archive/u1f360-id-rather-regret-the-things-ive-done-than/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *  
 *
 * @param {Object.<string, string|null>} obj - The file system map.
 * @param {string} absPath - The starting absolute path.
 * @returns {string|null} The resolved real path, or null if invalid or cyclic.
 */

function resolvePath(obj, absPath) {
    let current = absPath
    const visited = new Set()

    while(obj[current] !== null) {
        if(!(current in obj)) return null;

        if (visited.has(current)) return null;
        visited.add(current)

        current = obj[current]
    }

    return current
}

const fs = {
    "/a": "/b",
    "/b": "/c",
    "/c": null,
    "/loop1": "/loop2",
    "/loop2": "/loop1",
    "/real": null,
    "/alias": "/real",
};

console.log(resolvePath(fs, "/a"));
console.log(resolvePath(fs, "/loop1"));
console.log(resolvePath(fs, "/alias"));