// https://buttondown.com/cassidoo/archive/u1f3b8-progress-is-slow-but-little-by-little-my/

function trim(type, s) {
    switch (type) {
        case "leading":
            return s.trimStart();
        case "trailing":
            return s.trimEnd();
        case "compress":
            return s.replace(/ {2,}/g, " ");
        case "both":
        default:
            return s.trim();
    }
}

trim("leading", "   hello world   ");
// "hello world   "
trim("trailing", "   hello world   ");
// "   hello world"
trim("both", "   hello world   ");
// "hello world"
trim("compress", "hello   world  !");
// "hello world !"
trim("compress", "  hi   there  ");
// " hi there "
