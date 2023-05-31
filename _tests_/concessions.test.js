const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");

describe('getConcessionByID', () => {
   const concessions = [
      { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
      { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
      { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
      { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
      { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
   ];

   // Test 1: Test with a valid ID that exists in the concessions array.
   it('should return the concession object with matching ID', () => {
      const id = "g9sZdG1hI";
      const expectedConcession = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
      const result = getConcessionByID(concessions, id);
      expect(result).toEqual(expectedConcession);
   });

   // Test 2: Test with an invalid ID that does not exist in the concessions array.
   it('should return null for an invalid ID', () => {
      const id = 'g2ZZdG231';
      const result = getConcessionByID(concessions, id);
      expect(result).toBeNull();
   });

   // Test 3: Test with an empty conessions array
   it('should return null for empty concessions array', () => {
      const id = 'g2ZZdG231';
      const emptyConcessions = []
      const result = getConcessionByID(emptyConcessions, id);
      expect(result).toBeNull();
});
});

describe('calculateTotalFromIDs', () => {
   const concessions = [
      { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
      { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
      { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
      { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
      { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
   ];

   // test 1: Test if the total sum is correctly being calculated
   it('should calculate the total sum correctly of all concessions from the `ids` array', () => {
      const ids = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"];
      const expectedTotalPriceInCents = 3975;
      const result = calculateTotalFromIDs(concessions, ids);
      expect(result).toBe(expectedTotalPriceInCents);
   });

   // test 2: Test if the total sum is correctly being calculated ignoring invalid IDs
   it('should ignore invalid IDs and calculate the total correctly', () => {
      const ids = ["g9sZdG1hI", "invalid-id", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"];
      const expectedTotalPriceInCents = 2946;
      const result = calculateTotalFromIDs(concessions, ids);
      expect(result).toBe(expectedTotalPriceInCents);
   });
});







