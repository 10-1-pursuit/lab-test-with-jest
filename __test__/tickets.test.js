const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const data = require("../data/tickets");

describe("gettingTicketObjectWithName", () => {
  test("Returns a ticket object when given the name.", () => {
    expect(getTicketByName(data, "Adult Matinee")).toStrictEqual({
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    });
  });
  test("return null if no name is found", () => {
    expect(getTicketByName(data, "Jeremy")).toBe(null);
  });
});

describe("calculatingTotalByTicketName", () => {
  test("Calculates a total based on the given ticket names.", () => {
    expect(
      calculateTotalFromTicketNames(data, ["Senior Matinee", "Child Matinee"])
    ).toBe(1508);
  });
  test("return 0 if names aren't found", () => {
    expect(calculateTotalFromTicketNames(data, ["Jeremy", "Suzette"])).toBe(0);
  });
});
