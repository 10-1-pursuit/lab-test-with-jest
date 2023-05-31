const tickets = require("../data/tickets");

const {
    getTicketByName,
    calculateTotalFromTicketNames,
  } = require("../src/tickets");

  describe("getTicketByName()", () => {
    test("Returns a ticket object when given the name.", () => {
      const actual = getTicketByName(tickets, "Adult Matinee");
      const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
      expect(actual).toStrictEqual(expected);
    });
    test("Return `null` if no object is found.", () => {
      const actual = getTicketByName(tickets, "Oscar");
      const expected = null;
      expect(actual).toBe(expected);
    });
  });

  describe("calculateTotalFromTicketNames()", () => {
    test("The total value of all tickets from the `names` array.", () => {
      const actual = calculateTotalFromTicketNames(tickets, ["Adult Matinee", "Senior Matinee", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"]);
      const expected = 6114;
      expect(actual).toBe(expected);
    });
    test("Returns 0 if ticket name is not found.", () => {
      const actual = calculateTotalFromTicketNames(tickets, ["Adult Pass", "Child Pass"]);
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });