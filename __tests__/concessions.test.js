const concessionData = require('../data/concessions.js')
const {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions.js");

describe("getConcessionByID", () => {
    test("Should find the concessions by the ID", () => {
        const actual = getConcessionByID(concessionData, "g9sZdG1hI");
        const expected = concessionData[0];
        expect(actual).toBe(expected);
    });
    test("Should return null if ID do not match", () => {
        const actual = getConcessionByID(concessionData, "Does not match");
        const expected = null;
        expect(actual).toBe(expected);
    });
});

describe("calculateTotalFromIDs", () => {
    test("Should return the total value of all concessions from the `ids` array", () => {
        const ids = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri",]
        const actual = calculateTotalFromIDs(concessionData, ids);
        const expected = 3975;
        expect(actual).toBe(expected);
    });
    test("Should return 0 if the IDs do not match", () => {
        const ids = ["uycDouOytT", "0Qw9Yp2NL", "KzWBeYRAD", "NEHAsbTAk", "rNVCPVsri",]
        const actual = calculateTotalFromIDs(concessionData, ids);
        const expected = 0
        expect(actual).toBe(expected);
    });
});