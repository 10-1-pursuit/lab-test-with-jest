const concessions = require("../data/concessions");
const {getConcessionByID, 
  calculateTotalFromIDs,
 } = require("../src/concessions");


describe("getConcessionsById", () => {
it("returns object by ID", () => {
    expect(getConcessionByID(concessions,"g9sZdG1hI")).toStrictEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })
});

 it("returns null if no object is found", () => {
    expect(getConcessionByID(concessions,"CgyfHtutY")).toBe(null)
 });
});  

describe("calculateTotalFromIds", () => {
    it("Calculates a total based on the given concession IDs", () => {
        expect(calculateTotalFromIDs(concessions, ["g9sZdG1hI", "0Qs9Yp2NL"])).toBe(1958);
    });
it("returns 0 if IDs arent found", () => {
    expect(calculateTotalFromIDs(concessions, ["AsSSAassq", "styUFgwea"])).toBe(0);
  });
});
