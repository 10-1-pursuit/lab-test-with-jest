const {
	getTicketByName,
	calculateTotalFromTicketNames,
} = require('../src/tickets');
const data = require('../data/tickets');

//
//

describe('getTicketsByName', () => {
	it('gets a ticket type by name', () => {
		expect(getTicketByName(data, 'Adult Matinee')).toStrictEqual({
			id: '6ha0u__54',
			name: 'Adult Matinee',
			priceInCents: 949,
		});
	});
	it('should return null if no name is found', () => {
		expect(getTicketByName(data, 'First Responder Discount')).toBe(null);
	});
});

//
//

describe('calculateTotalFromTicketNames', () => {
	it('calculates a total based on received ticket names', () => {
		expect(
			calculateTotalFromTicketNames(data, ['Adult Matinee', 'Child Matinee'])
		).toBe(1618);
	});
	it('returns 0 if ticket name is not found', () => {
		expect(calculateTotalFromTicketNames(data, ['Discount', 'Staff'])).toBe(0);
	});
});
