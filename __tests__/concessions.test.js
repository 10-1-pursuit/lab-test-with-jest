const concessions = require('../data/concessions');

const {
	getConcessionByID,
	calculateTotalFromIDs,
} = require('../src/concessions');

describe('getConcessionById()', () => {
	it('should return a concession object by id', () => {
		const input = 'KzWBehRAD';
		const actual = getConcessionByID(concessions, input);
		const expected = { id: 'KzWBehRAD', name: 'Small Soda', priceInCents: 699 };
		expect(actual).toEqual(expected);
	});
	it(`returns 'null' if no object is found`, () => {
		const input = 'xzRBeh1AD';
		const actual = getConcessionByID(concessions, input);
		const expected = null;
		expect(actual).toEqual(expected);
	});
});

describe('calculateTotalFromIDs()', () => {
	it('should calculate and return a total based on the given `ids`', () => {
		const input = [
			'g9sZdG1hI',
			'0Qs9Yp2NL',
			'KzWBehRAD',
			'NEHAsbTYk',
			'rNVCeVsri',
		];
		const actual = calculateTotalFromIDs(concessions, input);
		const expected = 3975;
		expect(actual).toStrictEqual(expected);
	});
	it(`returns zero if concession is not found by ids`, () => {
		const input = ['xzRBeh1AD'];
		const actual = calculateTotalFromIDs(concessions, input);
		const expected = 0;
		expect(actual).toEqual(expected);
	});
});
