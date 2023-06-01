const {getTicketByName,calculateTotalFromTicketNames} = require("../src/tickets.js")

const data = require('../data/tickets.js');

describe('getTicketByName', () => {
    it("returns null if ticket not found", () => {
      // test code
      expect(getTicketByName(data, 'jackie')).toStrictEqual(null);
    });
});
describe('getTicketByName', () => {
  it('returns the ticket object with matching name', () => {
      // test code
      const expected = { 
       id: "6ha0u__54", 
       name : 'Adult Matinee',
       priceInCents: 949, 
      };
      expect(getTicketByName(data, 'adult Matinee')).toStrictEqual(expected);
    });
  });
    describe("calculateTotalFromTicketNames", () => {
      const tickets = [
        { id: "1", name: "Popcorn", priceInCents: 500 },
        { id: "2", name: "Soda", priceInCents: 350 },
        { id: "3", name: "Candy", priceInCents: 200 },
      ];
    
      test("returns the total value of concessions from the given IDs", () => {
        const ids = ["popcorn", "candy"];
        const actual = calculateTotalFromTicketNames(tickets,ids);
        const expected = 700;
        expect(actual).toBe(expected);
      });
  });