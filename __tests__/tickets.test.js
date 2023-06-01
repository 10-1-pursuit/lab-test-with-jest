const {
    getTicketByName,
    calculateTotalFromTicketNames
} = require("../src/tickets.js");

// Tickets data
const tickets = require("../data/tickets.js");

describe("getTicketByName()", () => {
    test("should return null if no ticket object is found", () =>{
        const actual = getTicketByName(tickets, "laskdjf");
        expect(actual).toEqual(null);
    });

    test("should return correct ticket object based on name", () =>{
        const actual = getTicketByName(tickets, "Senior Regular");
        expect(actual).toStrictEqual({ id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 })
    });
})

describe("calculateTotalFromTicketNames()", () => {
    test("should ignore pricing of incorrect names", () => {
        const names = ["adult regula", "Adult Regular", "Child Matinee"];
        const actual = calculateTotalFromTicketNames(tickets, names);
        expect(actual).toEqual(669+1369)
    });   

    test("should return 0 if no correct names are given", () => {
        const names = ["a"];
        const actual = calculateTotalFromTicketNames(tickets, names);
        expect(actual).toEqual(0);

        const emptyArray = [];
        const actual2 = calculateTotalFromTicketNames(tickets, emptyArray);
        expect(actual2).toEqual(0);
    });

    test("should calculate correct total cost based on given names", () => {
        const names = ["Senior Matinee", "Adult Matinee", "Adult Matinee", "Child Matinee"];
        const actual = calculateTotalFromTicketNames(tickets, names);
        expect(actual).toEqual(839+(2*949)+669)
    });

});