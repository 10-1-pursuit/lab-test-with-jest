const { getConcessionByID, calculateTotalFromIDs } = require('../src/concessions.js');
const concessions = require("../data/concessions.js")


describe('getConcessionByID()', () => {
    test('it returns the concession object with a matching ID', () => {
        const actual = getConcessionByID(concessions, 'g9sZdG1hI');
        const expected = { id: 'g9sZdG1hI', name: "Small Popcorn", priceInCents: 929 };
        expect(actual).toEqual(expected);
    });

    test('it returns null if no object is found with the given ID', () => {
        const actual = getConcessionByID(concessions, '4');
        expect(actual).toBeNull();
    });
});

describe('calculateTotalFromIDs()', () => {
    test('it calculates the total value of concessions based on the given IDs', () => {
        const ids = ['g9sZdG1hI', 'KzWBehRAD'];
        const actual = calculateTotalFromIDs(concessions, ids);
        const expected = 1628;
        expect(actual).toBe(expected);
    });

    test('it returns 0 if the IDs array is empty', () => {
        const ids = [];
        const actual = calculateTotalFromIDs(concessions, ids);
        expect(actual).toBe(0);
    });

    test('it ignores IDs that do not have a matching concession', () => {
        const ids = ['g9sZdG1hI', '4'];
        const actual = calculateTotalFromIDs(concessions, ids);
        const expected = 929;
        expect(actual).toBe(expected);
    });
});