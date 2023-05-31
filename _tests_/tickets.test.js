const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js");

describe('getTicketByName', () => {
    const tickets = [
        { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
        { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
        { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
        { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
        { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
        { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ]

    // Test 1: Test if the given name matches the ticket object
    it('should return a ticket object with the given name', () => {
        const name = "Adult Matinee";
        const expectedTicket = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
        const result = getTicketByName(tickets, name);
        expect(result).toEqual(expectedTicket)
    })

    // Test 2: Tests with an invalid name the doesnt exist in ticket
    it('should return null for invalid name', () => {
        const name = "invalid-name";
        const result = getTicketByName(tickets, name);
        expect(result).toBeNull();
    })

    // Test 3: Test with an empty tickets array
    it('should return null for empty tickets array', () => {
        const id = "6ha0u__54";
        const emptyTicket = []
        const result = getTicketByName(emptyTicket, id);
        expect(result).toBeNull();
});
});

describe('calculateTotalFromTicketNames', () => {
    const tickets = [
        { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
        { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
        { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
        { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
        { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
        { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ]

    // Test 1: Test if total sum is correctly being calculated
    it('should calculate the total sum correctly of all tickets from name array', () => {
        const names = ["Adult Matinee", "Senior Matinee", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"];
        const expectedTotalPriceInCents = 6114;
        const result = calculateTotalFromTicketNames(tickets, names);
        expect(result).toBe(expectedTotalPriceInCents);
    });

    // Test 2: Test if the total sum is correctly being calculated ignoring invalid-name
    it('should ignore invalid names and calculate the total correctly', () => {
        const names = ["Adult Matinee", "invalid-name", "Child Matinee", "Adult Regular", "Senior Regular", "Child Regular"];
        const expectedTotalPriceInCents = 5275;
        const result = calculateTotalFromTicketNames(tickets, names);
        expect(result).toBe(expectedTotalPriceInCents);
    });
});


