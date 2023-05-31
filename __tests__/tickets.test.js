const tickets = require("../data/tickets");

const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

describe("getTicketByName", () => {
  it("what happens the name is gary", () => {
    expect(getTicketByName(tickets, "gary")).toBe(null);
  });

  it("what happens when the name is adult matinee", () => {
    expect(getTicketByName(tickets, "Adult Matinee")).toStrictEqual({
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    });
  });
});

describe("calculateTotalFromTicketNames", () => {
  it("should return the total value of all tickets from the `names` array", () => {
    const names = [
      "Adult Matinee",
      "Senior Matinee",
      "Child Matinee",
      "Adult Regular",
      "Senior Regular",
      "Child Regular",
    ];
    const actual = calculateTotalFromTicketNames(tickets, names);
    const expected = 6114;
    expect(actual).toBe(expected);
  });
});
