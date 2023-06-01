const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const tickets = require("../data/tickets");

describe("getTicketByName", () => {
  test("should return a ticket object by name given", () => {
    const name = "Adult Regular";
    const actual = getTicketByName(tickets, name);
    const expected = {
      id: "uD_PoicNN",
      name: "Adult Regular",
      priceInCents: 1369,
    };
    expect(actual).toEqual(expected);
  });

  test("should return `null` if a matching name cannot be found", () => {
    const name = "Regular Admission";
    const actual = getTicketByName(tickets, name);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("calculateTotalFromTicketNames", () => {
  test("calculate a total priceInCents based on array of concession IDs", () => {
    const names = ["Senior Matinee", "Child Matinee", "Senior Regular"];
    const expectedTotal1 = 2727;
    const actualTotal1 = calculateTotalFromTicketNames(tickets, names);
    expect(actualTotal1).toBe(expectedTotal1);

    const names2 = ["Senior Matinee", "Adult Regular", "Child Regular"];
    const expectedTotal2 = 3277;
    const actualTotal2 = calculateTotalFromTicketNames(tickets, names2);
    expect(actualTotal2).toBe(expectedTotal2);

    const names3 = ["Adult Matinee", "Adult Regular"];
    const expectedTotal3 = 2318;
    const actualTotal3 = calculateTotalFromTicketNames(tickets, names3);
    expect(actualTotal3).toBe(expectedTotal3);
  });

  test("uses a for/of loop", () => {
    const funcString = calculateTotalFromTicketNames.toString();
    expect(funcString.includes("for")).toBe(true);
    expect(funcString.includes("of")).toBe(true);
    expect(funcString.includes("while")).toBe(false);
  });
});
