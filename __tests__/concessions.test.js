const {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions.js")
const data = require('../data/concessions');

describe("getConcessionByID", () => {
    it("should find concession by id given ", () => {
        const id = "g9sZdG1hI"
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929}
        const actual = getConcessionByID(data,id)
       expect(actual).toEqual(expected)
    })
    it("if no matching ID return null", () => {
        const id = null
        const actual = getConcessionByID(data,id)
        expect(actual).toEqual(null)
    });
});

describe(" calculateTotalFromIDs", () => {
    const concessions = [
        { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
        { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
        { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
        { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
        { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
    ]

it("should return total value of all concessions from the `ids`",() => {
    const ids =["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD"]
    const actual =calculateTotalFromIDs(concessions, ids)
    const expected = 2657
    expect(actual).toBe(expected);
});
    

it("should return undefined if concessions doesnt exist", () => {
    const ids = 'kenkis'
    const actual = calculateTotalFromIDs(concessions, ids)
    const expected = 0
expect(actual).toBe(expected)
});
});