const {
    getTicketByName, 
    calculateTotalFromTicketNames
} = require("../src/tickets.js");

const tickets = require("../data/tickets");

describe("getTicketByName", () => {
    it("Should return a ticket object from given ticket name.", () => {
        const name = "Child Matinee";
        const actual = getTicketByName(tickets, name);
        const expected =  { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 };
        expect(actual).toStrictEqual(expected);

    });
  
    it("Should return null if no object is found ", () => {
        const name = "Children Regular";
        const actual = getTicketByName(tickets, name);
        const expected = null;
        expect(actual).toBe(expected);

    });
  });

describe("calculateTotalFromTicketNames", () => {
    it("Should calculate a total based on the given ticket names.", () => {
        const name = ["Adult Regular", "Child Regular"];
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 2438;
        expect(actual).toBe(expected);

    });
  
    it("Should calculate the total value of all tickets from the `names` array.", () => {
        const name = ["Adult Matinee", "Child Matinee", "Senior Matinee", "Adult Regular", "Child Regular", "Senior Regular"];
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 6114;
        expect(actual).toBe(expected);

    });
  

  it("Should return 0 if no ticket is in the array" , () => {
        const name = [];
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 0;
        expect(actual).toBe(expected);

    });
});