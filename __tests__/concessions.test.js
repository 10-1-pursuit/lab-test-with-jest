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
    
it("should return total value of all concessions from the `ids`",() => {
    const ids =["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD"]
    const actual =calculateTotalFromIDs(data, ids)
    const expected = 2657
    expect(actual).toBe(expected);
});
    

it("should return undefined if concessions doesnt exist", () => {
    const ids = 'kenkis'
    const actual = calculateTotalFromIDs(data, ids)
    const expected = 0
expect(actual).toBe(expected)
});
});