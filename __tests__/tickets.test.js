const {
    getTicketByName,
    calculateTotalFromTicketNames
} = require("../src/tickets");

const tickets = require("../data/tickets");


describe("getTicketByName", () => {
    it("should find ticket by name given", () => {
        const id = "KzWBehRAD";
        const actual = getTicketByName(tickets, id);
        const expected = {
            id: "6ha0u__54",
            name: "Adult Matinee",
            priceInCents: 949
        };
        expect(actual).toEqual(expected);
    });

    it("should return `null` if a matching name cannot be found", () => {
        const id = "TQh2t6HWf";
        const actual = getTicketByName(tickets, id);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    it("calculate a total priceInCents based on array of ticket IDs", () => {
        expect(
            calculateTotalFromTicketNames(tickets, [
                "6ha0u__54",
                "dlb8ka9N_",
                "FSxeEmcoJ"
            ])
        ).toBe(2457);
        expect(
            calculateTotalFromTicketNames(tickets, [
                "uD_PoicNN",
                "TQh2t6HWf",
                "B8v5R2nVQ",
            ])
        ).toBe(3657);
        expect(calculateTotalFromTicketNames(tickets, ["TQh2t6HWf", "B8v5R2nVQ"])).toBe(2288);
    });

    it("uses a for/of loop", () => {
        const funcString = calculateTotalFromTicketNames.toString();
        expect(funcString.includes("for")).toBe(true);
        expect(funcString.includes("of")).toBe(true);
        expect(funcString.includes("while")).toBe(false);
    });
});
