const concessions = require("../data/concessions");
const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js");
ids = ["g9sZdG1hI", "KzWBehRAD", "rNVCeVsri"];
noIds = [];

describe("Returns a concession object by ID", () => {
    it('returns the object with the matching Id', () => {
        expect(getConcessionByID(concessions, "g9sZdG1hI")).toBe(concessions[0])
    })
    it('returns null if no matching ID is found', () => {
        expect(getConcessionByID(concessions, "wrong-ID")).toBe(null)
    })
})

describe("returns a total price from an array of concession IDs", () => {
    it('returns the total price from the matching Ids', () => {
        expect(calculateTotalFromIDs(concessions, ids)).toBe(2197)
    })
    it('returns null if no IDs is inputed', () => {
        expect(getConcessionByID(concessions, noIds)).toBe(null)
    })
})