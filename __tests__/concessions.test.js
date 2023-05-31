const concessions = require("../data/concessions")

const {
    getConcessionByID,
    calculateTotalFromIDs
} = require ("../data/concessions")

describe("getConcessionByID()", () => {
    test("it returns A concession object with a matching ID or `null` if no object is found.", () => {
      const actual = getConcessionByID(concessions, id);
      const expected = concession.id === id || null;
      expect(actual).toBe(expected);
    });
  });

