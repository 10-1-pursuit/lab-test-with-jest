const concessions = require("../data/concessions");

const {
    getConcessionByID,
    calculateTotalFromIDs,
  } = require("../src/concessions");

  describe("getConcessionByID()", () => {
    test("A concession object with a matching ID.", () => {
      const actual = getConcessionByID(concessions, "g9sZdG1hI");
      const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
      expect(actual).toStrictEqual(expected);
    });
    test("Return `null` if no object is found.", () => {
      const actual = getConcessionByID(concessions, "g9sZpQ1hI");
      const expected = null;
      expect(actual).toBe(expected);
    });
  });

  describe("calculateTotalFromIDs()", () => {
    test("The total value of all concessions from the `ids` array.", () => {
      const actual = calculateTotalFromIDs(concessions, ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"]);
      const expected = 3975;
      expect(actual).toBe(expected);
    });
    test("Returns 0 if 'ids' cannot be found.", () => {
      const actual = calculateTotalFromIDs(concessions, ["g5sZdZ1hI", "0Qs2Gp2NL"]);
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });