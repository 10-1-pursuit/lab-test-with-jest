const tickets = require("../data/tickets")
const { calculateTotalFromTicketNames, getTicketByName  } = require("../src/tickets")




describe("TicketName", () => {
    test(" retrieves ticket regardless of case", () => {
        expect(getTicketByName(tickets, "SEnior MatInee")).toStrictEqual({ id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 });
    });
    test(" returns null if ticket name is wrong", () => {
        expect(getTicketByName(tickets, "Adult Brunch")).toStrictEqual(null);
    });
    test("returns null if given an empty array", () => {
        expect(getTicketByName([], "Adult MatInee")).toStrictEqual(null);
    });
});

describe("CalculateTotal", () => {
    test("returns null if given an empty names arry", () => {
        expect(calculateTotalFromTicketNames(tickets, [])).toStrictEqual(0);
    });
    test(" returns null if ticket name is wrong", () => {
        expect(calculateTotalFromTicketNames(tickets, "Adult Brunch")).toStrictEqual(0);
    });
    test("returns null if given an empty array", () => {
        expect(calculateTotalFromTicketNames([], "Adult MatInee")).toStrictEqual(0);
    });
});
