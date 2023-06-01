const {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions.js");

//Concessions data
const concessions = require("../data/concessions")

describe("getConcessionByID()", () => {
    test("returns null if no object is found", () =>{
        const actual = getConcessionByID(concessions, "kjhjkjhj");
        expect(actual).toEqual(null);
    });

    test("returns null if an empty array is given", () => {
        const actual = getConcessionByID([], "0Qs9Yp2NL");
        expect(actual).toEqual(null)
    })

    test("returns correct object based on the id", () =>{
        const actual = getConcessionByID(concessions, "KzWBehRAD");
        expect(actual).toStrictEqual({ id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 })
    });
})

describe("calculateTotalFromIDs()", () => {
    test("ignores pricing of incorrect ids", () => {
        const actual = calculateTotalFromIDs(concessions, ["lksdjf", "NEHAsbTYk"]);
        expect(actual).toEqual(749)
    })

    test("no ids given should return 0", () => {
        const actual = calculateTotalFromIDs(concessions, []);
        expect(actual).toEqual(0);
    })

    test("calculates total cost based on array of ids", () => {
        const idArray = ["g9sZdG1hI", "rNVCeVsri", "NEHAsbTYk"];
        const actual = calculateTotalFromIDs(concessions, idArray);
        expect(actual).toEqual(929+569+749);
    })
    
})