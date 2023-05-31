const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const tickets = require("../data/tickets");
console.log(tickets);

describe("getTicketByName", () => {
  test("a description of what is being tested", () => {
    // test code
  });

  test("this description should be in the form of a sentence", () => {
    // test code
  });
});

describe("calculateTotalFromTicketNames", () => {
  test("a description of what is being tested", () => {
    // test code
  });

  test("this description should be in the form of a sentence", () => {
    // test code
  });
});


/*
lescribe.only ('getTicketByName", () => {
Run | Debug
it ('what happens the name is gary', () => {
/ test code
expect (getTicketByName (data, 'gary')) .toße(null);
});
Run | Debug
it ('what happens when the name is adult matinee', () =› {
/ test code
expect (getTicketByName (data, 'Adult Matinee')) .toStrictEqual ({
id: 'Ghaou__54', name: 'Adult Matinee' priceInCents: 949, ]);
*/

