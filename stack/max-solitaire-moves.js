/** 
 * https://buttondown.com/cassidoo/archive/u1f34e-what-we-know-is-a-drop-what-we-dont-know/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the stack
 *
 * @param {{rank: number, color: string}[]} cards
 * @returns {number} Maximum number of valid solitaire moves.
 */

function maxSolitaireMoves(cards) {
    if (!cards || cards.length < 2) {
        return 0;
    }

    let moves = 0;
    let stackCards = [cards[0]];

    for (let i = 1; i < cards.length; i++) {
        let nextCard = cards[i];
        let topCard = stackCards[stackCards.length - 1];

        if (nextCard.rank === topCard.rank - 1 && nextCard.color !== topCard.color) {
            moves++;
            stackCards[stackCards.length - 1] = nextCard;
        } else {
            stackCards.push(nextCard);
        }
    }

    return moves;
}

const cards = [
    { rank: 7, color: "black" },
    { rank: 6, color: "red" },
    { rank: 5, color: "black" },
    { rank: 9, color: "red" }
];

const cards2 = [
    { rank: 8, color: "black" },
    { rank: 7, color: "red" },
    { rank: 6, color: "red" },
    { rank: 5, color: "black" }
];
console.log(maxSolitaireMoves(cards));

// > maxSolitaireMoves(cards)
// > 2 // 6 onto 7, 5 onto 6

// > maxSolitaireMoves(cards2)
// > 2 // 7 onto 8, 5 onto 6