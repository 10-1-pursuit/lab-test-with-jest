

const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js");
const tickets = require("../data/tickets.js");


describe("getTicketByName", () => {

    test("Should return null if ticket name is not found", () => {

        const actual = getTicketByName(tickets, "Adult")
        const expected = null;
        expect(actual).toStrictEqual(expected);
    });
});



describe("getTicketByName", () => {

    test("Should return the object associated with ticket name", () => {
        const name = "Adult Regular"
        const actual = getTicketByName(tickets, name)
        const expected = { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 };
        expect(actual).toStrictEqual(expected);
    });

});

describe("calculateTotalFromTicketNames", () => {

    test("The total value of all tickets from the `names` array", () => {
        const names = ["Adult Regular", "Senior Regular"]
        const actual = calculateTotalFromTicketNames(tickets, names)
        const expected = 2588;
        expect(actual).toStrictEqual(expected);
    });
});
