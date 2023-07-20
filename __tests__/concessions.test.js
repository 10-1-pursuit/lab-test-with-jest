const myObject = require('../src/concessions')
const concessions = require('../data/concessions')
const totalObj = require('../src/concessions');
test("returns a concession object with a matching ID or `null` if no object is found", () => {
    const actual = myObject.getConcessionByID(concessions, "");
    const expected = null;
    expect(actual).toBe(expected);
})

test('Calculate total for empty concession IDs array', () => {
    const ids = [];
    const total = totalObj.calculateTotalFromIDs(concessions, ids);
    expect(total).toBe(0);
  });
  
  test('Calculate total for valid concession IDs', () => {
    const ids = ['g9sZdG1hI', 'KzWBehRAD'];
    const total = totalObj.calculateTotalFromIDs(concessions, ids);
    expect(total).toBe(1628); 
  });
  
  test('Calculate total for invalid concession IDs', () => {
    const ids = ['invalidId1', 'invalidId2'];
    const total = totalObj.calculateTotalFromIDs(concessions, ids);
    expect(total).toBe(0); 
  });
  
