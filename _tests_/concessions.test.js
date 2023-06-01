const {getConcessionByID, calculateTotalFromIDs} = require("../src/concessions.js")

const data = require('../data/concessions.js');

describe('getConcessionByID', () => {
    const concessions = [
      { id: "1", name: "Popcorn", priceInCents: 500 },
      { id: "2", name: "Soda", priceInCents: 350 },
      { id: "3", name: "Candy", priceInCents: 200 },
    ];
  
    test("returns a concession object by ID", () => {
      const actual = getConcessionByID(concessions, "2");
      const expected = { id: "2", name: "Soda", priceInCents: 350 };
      expect(actual).toEqual(expected);
    });
  
    test("returns null if no concession object found", () => {
      const actual = getConcessionByID(concessions, "4");
      expect(actual).toBeNull();
    });
  });
  
  describe("calculateTotalFromIDs", () => {
    const concessions = [
      { id: "1", name: "Popcorn", priceInCents: 500 },
      { id: "2", name: "Soda", priceInCents: 350 },
      { id: "3", name: "Candy", priceInCents: 200 },
    ];
  
    test("returns the total value of concessions from the given IDs", () => {
      const ids = ["1", "3"];
      const actual = calculateTotalFromIDs(concessions, ids);
      const expected = 700;
      expect(actual).toBe(expected);
    });
  
    test("returns 0 if no concession IDs provided", () => {
      const ids = [];
      const actual = calculateTotalFromIDs(concessions, ids);
      const expected = 0;
      expect(actual).toBe(expected);
    });
  
    test("returns 0 if no matching concession objects found", () => {
      const ids = ["4", "5"];
      const actual = calculateTotalFromIDs(concessions, ids);
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });
  
  