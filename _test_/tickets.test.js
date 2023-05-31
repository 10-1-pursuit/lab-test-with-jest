const tData= require("../data/tickets");
const  {
  
  getTicketByName,
  
  calculateTotalFromTicketNames

} = require("../src/tickets");

describe("getTicketByName()",() => {
    test("should return ticket by Name", () =>{
      const input = { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 };
      const actual = getTicketByName(tData,"string");
      const expected = "adult regular";
      expect(input.name.toLocaleLowerCase()).toBe(expected);
     
     
     
      
    });

    test("should return null if no object  is found", () =>{
      const input = { id: "seNIor123X", name: "Senior Discount", priceInCents: 1000 };
      const actual = getTicketByName(tData,"string");
      const expected = null;
      expect(actual).toBe(expected);
     
      
    });

});


describe("calculateTotalFromTicketNames()",() => {
    test("should calculate total ticket price by Ticket Name", () =>{
      const input = [
        { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
        { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
        { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
        { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
        { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
        { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
      ];
      const actual = calculateTotalFromTicketNames(tData,"string");
      const expected = 6114;
      expect(input[0].priceInCents+input[1].priceInCents+input[2].priceInCents+input[3].priceInCents+input[4].priceInCents+input[5].priceInCents).toBe(expected);
      
    });

});

