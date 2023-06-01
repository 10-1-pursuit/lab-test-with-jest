

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

        const actual = getTicketByName(tickets, "Adult Regular")
        const expected = { id: "6uD_PoicNN", name: "Adult Regular", priceInCents: 1369 };
        expect(actual).toStrictEqual(expected);
    });

});

describe("calculateTotalFromTicketNames", () => {

    test("The total value of all tickets from the `names` array", () => {

        const actual = calculateTotalFromTicketNames(tickets, "Adult Regular")
        const expected = 6114;
        expect(actual).toStrictEqual(expected);
    });
});
