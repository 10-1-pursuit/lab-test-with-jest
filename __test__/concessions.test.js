const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

const data = require("../data/concessions");

describe("getConcessions", () => {
  test("returns object by ID", () => {
    expect(getConcessionByID(data, "g9sZdG1hI")).toStrictEqual({
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    });
  });
  test("return null if no object is found", () => {
    expect(getConcessionByID(data, "HDs93JdI0")).toBe(null);
  });
});

describe("getTotalById", () => {
  test("Calculates a total based on concession IDs", () => {
    expect(calculateTotalFromIDs(data, ["0Qs9Yp2NL", "g9sZdG1hI"])).toBe(1958);
  });
  test("returns 0 if IDs aren't found ", () => {
    expect(calculateTotalFromIDs(data, ["jfoJS73Hd", "aHE39HYRn"])).toBe(0);
  });
});
