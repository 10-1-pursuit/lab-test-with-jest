const {
	getConcessionByID,
	calculateTotalFromIDs,
} = require('../src/concessions');
const concessions = require('../data/concessions');

describe('getConcessionsByID()', () => {
	it('should find concession by id given', () => {
		expect(getConcessionByID(concessions, 'KzWBehRAD')).toStrictEqual({
			id: 'KzWBehRAD',
			name: 'Small Soda',
			priceInCents: 699,
		});
	});
	it('should return null if no concession id is found', () => {
		expect(getConcessionByID(concessions, 'corndogNugs')).toBeNull();
	});
});

//
//

describe('calculateTotalFromIDs()', () => {
    it('calculates a total based on the given concession IDs given', () => {
        expect(calculateTotalFromIDs(concessions, ['0Qs9Yp2NL', 'KzWBehRAD'])).toBe(1728)
    })
})

it('should return 0 if no concession IDs are found', () => {
    expect(calculateTotalFromIDs(concessions, 'largesoda','mediumpopcorn')).toBe(0)
})