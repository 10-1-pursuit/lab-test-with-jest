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
	it('should calculate and return a `total` based on the given ticket names', () => {
		const input = [
			'Adult Matinee',
			'Senior Matinee',
			'Child Matinee',
			'Adult Regular',
			'Senior Regular',
			'Child Regular',
		];
		const actual = calculateTotalFromTicketNames(tickets, input);
		const expected = 6114;
		expect(actual).toEqual(expected);
	});
	it(`returns zero if tickets aren't found by name`, () => {
		const input = ['Child Special'];
		const actual = calculateTotalFromTicketNames(tickets, input);
		const expected = 0;
		expect(actual).toEqual(expected);
	});
});
