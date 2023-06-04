const tickets = require('../data/tickets');

const {
	getTicketByName,
	calculateTotalFromTicketNames,
} = require('../src/tickets');

describe('getTicketByName()', () => {
	it('returns a ticket object when given the name.', () => {
		const input = 'Adult Regular';
		const actual = getTicketByName(tickets, input);
		const expected = {
			id: 'uD_PoicNN',
			name: 'Adult Regular',
			priceInCents: 1369,
		};
		expect(actual).toEqual(expected);
	});
	it(`returns 'null' if no object is found`, () => {
		const input = 'Child Special';
		const actual = getTicketByName(tickets, input);
		const expected = null;
		expect(actual).toEqual(expected);
	});
});

describe('calculateTotalFromTicketNames()', () => {
	it('returns a ticket object when given the name.', () => {
		const input = 'Adult Regular';
		const actual = calculateTotalFromTicketNames(tickets, input);
		const expected = {
			id: 'uD_PoicNN',
			name: 'Adult Regular',
			priceInCents: 1369,
		};
		expect(actual).toEqual(expected);
	});
	it(`returns 'null' if no object is found`, () => {
		const input = 'Child Special';
		const actual = calculateTotalFromTicketNames(tickets, input);
		const expected = null;
		expect(actual).toEqual(expected);
	});
});
