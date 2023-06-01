const ticketsData = require("../data/tickets")
const {
    getTicketByName,
  calculateTotalFromTicketNames,
 } = require("../src/tickets");

 describe("should get ticket object with name", () => {
    it("returns a ticket object when given the name.", () => {
        expect(getTicketByName(ticketsData, "Adult Matinee")).toStrictEqual({
            id: "6habu__54",
            name: "Adult Matinee",
            priceInCents: 949,
        });
    });
    test("return null if no name is found", () => {
        expect(getTicketByName(ticketsData, "tone")).toBe(null);
    });
});


describe("calculatingTotalByTicketName", () => {
    test("Calculates a total based on the given ticket names.", () => {
      expect(
        calculateTotalFromTicketNames(ticketsData, ["Senior Matinee", "Child Matinee"])
      ).toBe(1508);
    });
    test("return 0 if names aren't found", () => {
      expect(calculateTotalFromTicketNames(ticketsData, ["Attorney", "Biggs"])).toBe(0);
    });
  });
