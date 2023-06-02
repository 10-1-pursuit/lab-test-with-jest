const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const data = require('../data/tickets');

describe.only("getTicketByName", () => {
  test("adds two numbers", () => {
    // test code
    expect(getTicketByName())
  });

  it("what happens when the name is Adult Matinee", () => {
    // test code
    expect(getTicketByName(data, 'Adult Matinee')).toStrictEqual({
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949
    })
  });

  it("what happens when the name is Senior Matinee", () => {
    // test code
    expect(getTicketByName(data, 'Senior Matinee')).toStrictEqual({
      id: "dlb8ka9N_",
      name: "Senior Matinee",
      priceInCents: 839
    })
  });

  it("what happens when the name is Child Matinee", () => {
    // test code
    expect(getTicketByName(data, 'Child Matinee')).toStrictEqual({
      id: "FSxeEmcoJ",
      name: "Child Matinee",
      priceInCents: 669
    })
  });

  it("what happens when the name is Adult Regular", () => {
    // test code
    expect(getTicketByName(data, 'Adult Regular')).toStrictEqual({
      id: "uD_PoicNN",
      name: "Adult Regular",
      priceInCents: 1369
    })
  });

  it("what happens when the name is Senior Regular", () => {
    // test code
    expect(getTicketByName(data, 'Senior Regular')).toStrictEqual({
      id: "TQh2t6HWf",
      name: "Senior Regular",
      priceInCents: 1219
    })
  });

  it("what happens when the name is Child Regular", () => {
    // test code
    expect(getTicketByName(data, 'Child Regular')).toStrictEqual({
      id: "B8v5R2nVQ",
      name: "Child Regular",
      priceInCents: 1069
    })
  });

  const { getTicketByName } = require('../src/tickets');

  test("getTicketByName should return the ticket object with a matching name", () => {
    const tickets = [
      { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
      { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
      { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
      { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
      { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
      { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ];

    const result = getTicketByName(tickets, "Senior Matinee");
    expect(result).toEqual({ id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 });
  });


});

