const {
    getTicketByName,
    calculateTotalFromTicketNames
  } = require("../src/tickets.js")
  const data = require('../data/tickets')

  describe('getTicketByName', () => {
    it ('what happens the name is kenia', () => {
    expect (getTicketByName(data, 'kenia')).toBe(null);
    });
    
    it ('what happens when the name is adult matinee', () => {
    
    expect(getTicketByName(data, 'Adult Matinee')).toStrictEqual({
    id: '6ha0u__54',
    name: 'Adult Matinee',
    priceInCents: 949,
    });
    });
    });
    describe("calculateTotalFromTicketNames", () => {
        it("should return the total value of all tickets from the `names` array", () => {
            const names = ["Adult Matinee","Senior Matinee","Child Matinee","Adult Regular","Senior Regular","Child Regular"]
           const actual = calculateTotalFromTicketNames(data,names)
           const expected = 949 + 839 + 669 + 1369 + 1219 + 1069
           expect(actual).toBe(expected)
            
        })
    })
  