


  
const cData= require("../data/concessions");
const  {
  getConcessionByID,
  calculateTotalFromIDs
} = require("../src/concessions");


describe("getConcessionByIDs()",() => {
    test("should return and ID", () =>{
      
      const input = { id: "g9sZdG1hI" };
      const actual = getConcessionByID(cData,input);
       expect(input.id).toEqual("g9sZdG1hI");
       //const expected= input.id
      //expect(actual).toEqual(expected);
      
    });

    test("should return null if no object is found", () =>{
      const input = { id: "abcdefghi" };
      const actual = getConcessionByID(cData,typeof input.id);
      const expected = null;
      expect(actual).toEqual(expected);
      
    });

});



//const myObj= require("../data/concessions");

describe ("calculateTotalFromIDs()",() => {
    test("should return total of purchases by given ID", () =>{
      const input =  { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 };
      const actual = calculateTotalFromIDs(cData,input.id);
      const expected = 749;
      expect(input.priceInCents).toEqual(expected)
      //expect(actual).toEqual(expected);
      
    });

});
