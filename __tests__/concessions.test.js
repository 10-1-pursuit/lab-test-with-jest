const concessions = require("../data/concessions.js");

const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

describe("getConcessionByID()", () => {
  it ("should find concession object with a matching ID ", () => {
    const id = "KzWBehRAD";

    const expected = { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 };
    const actual = getConcessionByID(concessions, id);

    expect(actual).toEqual(expected);
  });
});

    it("if no matching ID return null", () => {
    const id = null
    const actual = getConcessionByID(concessions,id)
    expect(actual).toEqual(null)
});

describe ("calculateTotalfromIDs", () => {
    const concessions = [
        { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
        { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
        { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
        { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
        { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
    ]

 it ("should return total value of all concessions from the 'ids'", () => {
       
        const ids = ["0Qs9Yp2NL", "NEHAsbTYk", "rNVCeVsri"] ;
        const actualTotal = calculateTotalFromIDs(concessions, ids);
        const expectedTotal =  2347
//1029 + 749 + 569 = 
        expect(actualTotal).toEqual(expectedTotal);
    });


    it ("should return undefined if concessions doesnt exist", () => {
    const ids = ["Z21KehRJD", "RD15ehPJD"]
    const actualTotal = calculateTotalFromIDs(concessions, ids);
    
    expect(actualTotal).toBe(0);
    });
});