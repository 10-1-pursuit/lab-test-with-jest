
const { getConcessionByID, calculateTotalFromIDs } = ("../src/concessions.js")
const concessionsData = ("../data/concessions.js")

describe("getConcessionByID", () => {

  test("Should return null if no concession item with that ID is found.", () => {

    const actual = getConcessionByID(concessionsData, "14038")
    const expected = null;
    expect(actual).toStrictEqual(expected);
  })

  test("Should return the object associated with concession ID.", () => {

    const actual = getConcessionByID(concessionsData, "rNVCeVsri")
    const expected = { id: "rNVCeVsri", name: "Candy", priceInCents: 569 };
    expect(actual).toStrictEqual(expected);

  });
});


describe("calculateTotalFromIDs", () => {

  test("The total value of all concessions from the `ids` array.", () => {

    const actual = calculateTotalFromIDs(concessionsData, "rNVCeVsri")
    const expected = 6114;
    expect(actual).toStrictEqual(expected);


  })

});
