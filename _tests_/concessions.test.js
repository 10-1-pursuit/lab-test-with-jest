const { getConcessionByID , calculateTotalFromIDs  } = require("../src/concessions")
const { concessions } = require("../src/concessions")

describe("ConcessionsById" , () => {
    test("given the correct string, i work.",  () => {
        expect(getConcessionByID( concessions, "KzWBehRAD")).toStrictEqual( { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 } );
    });
    test("given an incorrect string, i return null.",  () => {
        expect(getConcessionByID( concessions, "KzWBeAAARAD")).toStrictEqual( null );
    });
    
    });

describe("ConcessionsCalTotal", () => {
    test("given an empty ID arr, i return null.", () => {
        expect(calculateTotalFromIDs(concessions, [])).toBe(null || 0);
    });
    test("i give the total the price", () => {
        expect(calculateTotalFromIDs(concessions, ["NEHAsbTYk","rNVCeVsri"])).toBe(1318);
    });

})