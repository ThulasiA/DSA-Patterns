// https://buttondown.com/cassidoo/archive/u1f635-u1f4ab-time-you-enjoy-wasting-is-not/


function fulfilledOrdersBeforeFailure(orders, stock) {
    let inventory = { ...stock };
    let count = 0;

    for (const order of orders) {
        let required = {};

        for (const flavor of order) {
            required[flavor] = (required[flavor] || 0) + 1;
        }

        let canFulfill = true;
        for (const flavor in required) {
            if ((inventory[flavor] || 0) < required[flavor]) {
                canFulfill = false;
                break;
            }
        }
        if (!canFulfill) return count;

        for (const flavor in required) {
            inventory[flavor] -= required[flavor];
        }

        count++;
    }

    return count;
}

console.log(fulfilledOrdersBeforeFailure(
    [["chocolate"], ["chocolate"], ["chocolate"]],
    { chocolate: 2 })); // 2

console.log(fulfilledOrdersBeforeFailure(
    [["vanilla", "vanilla"], ["chocolate", "mint"], ["strawberry"], ["strawberry", "mint"]],
    { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 })); // 3

console.log(fulfilledOrdersBeforeFailure(
    [["rocky road"], ["vanilla"]],
    { vanilla: 3 })); // 0 