const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets.js');
const tickets = require("../data/tickets.js")


describe('getTicketByName()', () => {
    test('it returns the ticket object with a matching name (case-insensitive)', () => {
        const actual = getTicketByName(tickets, 'Senior Matinee');
        const expected = { id: 'dlb8ka9N_', name: 'Senior Matinee', priceInCents: 839 };
        expect(actual).toEqual(expected);
    });

    test('it returns null if no object is found with the given name', () => {
        const actual = getTicketByName(tickets, 'child ticket');
        expect(actual).toBeNull();
    });
});

describe('calculateTotalFromTicketNames()', () => {
    test('it calculates the total value of tickets based on the given names', () => {
        const names = ['Senior Regular', 'Child Regular'];
        const actual = calculateTotalFromTicketNames(tickets, names);
        const expected = 2288; 
        expect(actual).toBe(expected);
    });

    test('it returns 0 if the names array is empty', () => {
        const names = [];
        const actual = calculateTotalFromTicketNames(tickets, names);
        expect(actual).toBe(0);
    });

    test('it ignores names that do not have a matching ticket', () => {
        const names = ['Adult Admission', 'Matinee Ticket']; 
        const actual = calculateTotalFromTicketNames(tickets, names);
        const expected = 0; 
        expect(actual).toBe(expected);
    });
});