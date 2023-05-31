const ticketData = require('../data/tickets.js')
const {
    getTicketByName,
    calculateTotalFromTicketNames
} = require('../src/tickets.js')


describe("getTicketByName", () => {
    test("should return the ticket object based on the given name", () => {
        const actual = getTicketByName(ticketData, "Adult Matinee");
        const expected = ticketData[0];
        expect(actual).toBe(expected);
    });
    test("should return null if name do not match", () => {
        const actual = getTicketByName(ticketData, "Hello");
        const expected = null;
        expect(actual).toBe(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    test("Should return the total value of all tickets based on the names in the 'names' array", () => {
        const names = ["Adult Matinee", "Senior Matinee", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"]
        const actual = calculateTotalFromTicketNames(ticketData, names);
        const expected = 6114;
        expect(actual).toBe(expected);
    });
    test("Should return 0 if the names do not match", () => {
        const names = ["Adult M", "Senior M", "Child M", "Adult R", "Senior R", "Child R"]
        const actual = calculateTotalFromTicketNames(ticketData, names);
        const expected = 0;
        expect(actual).toBe(expected);
    });
});