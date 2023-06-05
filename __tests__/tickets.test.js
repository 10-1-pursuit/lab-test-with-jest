const tickets = require("../data/tickets");
const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");
const names = ["Adult Matinee", "Child Matinee", "Child Regular"];
const noNames = [];
describe("Returns a ticket object by name", () => {
    it('returns the object with the matching name', () => {
        expect(getTicketByName(tickets, "Senior Matinee")).toBe(tickets[1])
    })
    it('returns null if no matching name is found', () => {
        expect(getTicketByName(tickets, "wrong-name")).toBe(null)
    })
})

describe("Returns a concession object by ID", () => {
    it('returns the object with the matching Id', () => {
        expect(calculateTotalFromTicketNames(tickets, names)).toBe(2687)
    })
    it('returns 0 if no names are inputed', () => {
        expect(calculateTotalFromTicketNames(tickets, noNames)).toBe(0)
    })
})