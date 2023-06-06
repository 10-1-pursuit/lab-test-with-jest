const  {
  getConcessionByID, 
  calculateTotalFromIDs,
} = require("../src/concessions");

const concessions = require("../data/concessions");


describe("getConcessionByID", () => {
    test("Should return a concession object by matching ID.", () => {
      const id = "g9sZdG1hI";
      const actual = getConcessionByID(concessions, id);
      const expected = {id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929};
      expect(actual).toStrictEqual(expected);

    });
  
    test("Should return 'null' if no object is found.", () => {
      const id =[]
      const actual = getConcessionByID(concessions, id);
      const expected = null;
      expect(actual).toStrictEqual(expected);
    });
  });

describe("calculateTotalFromIDs", () => {
    it("Should calculate the total based on the given IDs.", () => {
      const id = ["KzWBehRAD", "NEHAsbTYk"];
      const actual = calculateTotalFromIDs(concessions, id);
      const expected = 1448;
      expect(actual).toStrictEqual(expected);
    });
  
  
    it("Should calculate the total value of all concessions from the `ids` array.", () => {
      const id =["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"]
      const actual = calculateTotalFromIDs(concessions, id);
      const expected = 3975;
      expect(actual).toStrictEqual(expected);
    });

    it("Should return 0 if no id found.", () => {
      const id = [];
      const actual = calculateTotalFromIDs(concessions, id);
      const expected = 0;
      expect(actual).toStrictEqual(expected);
    });
  });




