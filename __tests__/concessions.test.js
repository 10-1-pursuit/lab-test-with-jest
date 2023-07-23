const concessionsF = require("../src/concessions");
const data = require("../data/concessions");
describe("gettingTConcessionById", () => {
  test("Returns concessions object by Id", () => {
    expect(concessionsF.getConcessionByID(data, "g9sZdG1hI")).toStrictEqual({
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    });
  });
  test("return null if no Id is found", () => {
    expect(concessionsF.getConcessionByID(data, "Jeremy")).toBe(null);
  });
});

/*describe("calculatingTotalByTicketName", () => {
  test("Calculates a total based on the given ticket names.", () => {
    expect(
      ticketFunctions.calculateTotalFromTicketNames(data, [
        "Senior Matinee",
        "Child Matinee",
      ])
    ).toBe(1508);
  });
  test("return 0 if names aren't found", () => {
    expect(
      ticketFunctions.calculateTotalFromTicketNames(data, ["Jeremy", "Suzette"])
    ).toBe(0);
  });
});*/
