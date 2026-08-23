// https://buttondown.com/cassidoo/archive/u1f45b-the-most-certain-sign-of-wisdom-is/

function packRectangles(n, m, a, b) {
    if ((n < a && n < b) || (m < a && m < b)) return 0;

    const horizontal = Math.floor(n / a) * Math.floor(m / b);
    const vertical = Math.floor(n / b) * Math.floor(m / a);

    return Math.max(horizontal, vertical);
}

// > packRectangles(10, 10, 3, 4)
// > 6

// > packRectangles(10, 6, 2, 3)
// > 10

// > packRectangles(10, 6, 11, 2)
// > 0
