/**
 * https://buttondown.com/cassidoo/archive/u1f6b8-you-can-make-anything-by-writing-cs-lewis/
 * 
 * @param {string[][]} unavailableRanges - Array of [startDate, endDate] pairs (inclusive).
 * @param {string[]} overrideDates - Dates that disable auto‑reply even if unavailable.
 * @param {string} messageDate - The incoming message date.
 * @returns {boolean} True if auto‑reply should be sent, false otherwise.
 */

function shouldAutoReply(unavailableRanges, overrideDates, messageDate) {
    if ((overrideDates).includes(messageDate)) {
        return false;
    }

    let msgTime = new Date(messageDate).getTime();

    return unavailableRanges.some(
        ([from, to]) => new Date(from).getTime() <= msgTime && msgTime <= new Date(to).getTime()
    );
}

const unavailableRanges1 = [["2026-07-01", "2026-07-10"], ["2026-08-15", "2026-08-20"]];
const overrideDates1 = ["2026-07-04"];
const messageDate1 = "2026-07-05";

const unavailableRanges2 = [["2026-07-01", "2026-07-10"]];
const overrideDates2 = ["2026-07-04"];
const messageDate2 = "2026-07-04";

const unavailableRanges3 = [["2026-07-01", "2026-07-10"]];
const overrideDates3 = [];
const messageDate3 = "2026-07-11";

console.log(shouldAutoReply(unavailableRanges1, overrideDates1, messageDate1));
// > true
console.log(shouldAutoReply(unavailableRanges2, overrideDates2, messageDate2));
// > false
console.log(shouldAutoReply(unavailableRanges3, overrideDates3, messageDate3));
// > false