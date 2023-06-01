
const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js")
const concessions = require("../data/concessions.js")

describe("getConcessionByID()", () => {

  test("Should return null if no concession item with that ID is found.", () => {
    const id = "14038"
    const actual = getConcessionByID(concessions, id)
    const expected = null;
    expect(actual).toEqual(expected);

  });

  test("Should return the object associated with concession ID.", () => {
    const id = "rNVCeVsri"
    const actual = getConcessionByID(concessions, id)
    const expected = { id: "rNVCeVsri", name: "Candy", priceInCents: 569 };
    expect(actual).toStrictEqual(expected);

  });
});


describe("calculateTotalFromIDs()", () => {

  test("The total value of all concessions from the `ids` array.", () => {
    const ids = ["0Qs9Yp2NL", "NEHAsbTYk"]
    const actual = calculateTotalFromIDs(concessions, ids)
    const expected = 1778;
    expect(actual).toStrictEqual(expected);


  });

});
