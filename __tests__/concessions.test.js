const {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions");
const concessions = require("../data/concessions")

describe("getConcessionByID", () => {
  test("should return a concession object by ID given", () => {
    const id = "KzWBehRAD";
    const actual = getConcessionByID(concessions, id);
    const expected = { 
      id: "KzWBehRAD", 
      name: "Small Soda", 
      priceInCents: 699
    };
    expect(actual).toEqual(expected);
  });

  test("should return `null` if a matching id cannot be found", () => {
    const id = "TQh2t6HWf";
    const actual = getConcessionByID(concessions, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("calculateTotalFromIDs", () => {
  test("calculate a total priceInCents based on array of concession IDs", () => {
    const arrIDs1 = ["0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk"];
    const expectedTotal1 = 2477;
    const actualTotal1 = calculateTotalFromIDs(concessions, arrIDs1);
    expect(actualTotal1).toBe(expectedTotal1);

    const arrIDs2 = ["g9sZdG1hI", "KzWBehRAD", "rNVCeVsri"];
    const expectedTotal2 = 2197;
    const actualTotal2 = calculateTotalFromIDs(concessions, arrIDs2);
    expect(actualTotal2).toBe(expectedTotal2);

    const arrIDs3 = ["0Qs9Yp2NL", "NEHAsbTYk"];
    const expectedTotal3 = 1778;
    const actualTotal3 = calculateTotalFromIDs(concessions, arrIDs3);
    expect(actualTotal3).toBe(expectedTotal3);
  });

  test("uses a for/of loop", () => {
    const funcString = calculateTotalFromIDs.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("of")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});