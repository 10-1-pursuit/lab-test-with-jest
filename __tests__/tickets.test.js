
const tickets = require("../data/tickets")

const {
    getTicketByName,
    calculateTotalFromTicketNames
} = require("../src/tickets") 

describe('getTicketByName', () => {
it ('what happens the name is gary', () => {
expect (getTicketByName(tickets, 'gary')).toBe(null);
});

it ('what happens when the name is adult matinee', () => {

expect(getTicketByName(tickets, 'Adult Matinee')).toStrictEqual({
id: '6ha0u__54',
name: 'Adult Matinee',
priceInCents: 949,
});
});
});