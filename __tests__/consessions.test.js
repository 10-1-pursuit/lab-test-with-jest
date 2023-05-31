const {
    getConcessionByID,
    calculateTotalFromIDs } = require("../src/concessions");
const concessions = require("../data/concessions");


describe("getConcessionByID", () => {
    it("should find concession by id given", () => {
        const id = "KzWBehRAD";
        const actual = getConcessionByID(concessions, id);
        const expected = {
            id: "KzWBehRAD",
            name: "Small Soda",
            priceInCents: 699
        };
        expect(actual).toEqual(expected);
    });

    it("should return `null` if a matching id cannot be found", () => {
        const id = "TQh2t6HWf";
        const actual = getConcessionByID(concessions, id);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});


// describe("calculateTotalFromIDs", () => {
//     it("should check if ids data type is a string ", () => {
//         expect(calculateTotalFromIDs(ids)).tobe("");
//     });

//     it("should return `undefined` if ids is not a string", () => {
//         const ids = "TQh2t6HWf";
//         const actual = getConcessionByID(concessions, ids);
//         const expected = "undefined";
//         expect(actual).toEqual(expected);
//     });
// });

describe("calculateTotalFromIDs", () => {
    it("calculate a total priceInCents based on array of concession IDs", () => {
        expect(
            calculateTotalFromIDs(concessions, [
                "0Qs9Yp2NL",
                "KzWBehRAD",
                "NEHAsbTYk"
            ])
        ).toBe(2477);
        expect(
            calculateTotalFromIDs(concessions, [
                "g9sZdG1hI",
                "KzWBehRAD",
                "rNVCeVsri",
            ])
        ).toBe(2197);
        expect(calculateTotalFromIDs(concessions, ["0Qs9Yp2NL", "NEHAsbTYk"])).toBe(1778);
    });

    it("uses a for/of loop", () => {
        const funcString = calculateTotalFromIDs.toString();
        expect(funcString.includes("for")).toBe(true);
        expect(funcString.includes("of")).toBe(true);
        expect(funcString.includes("while")).toBe(false);
    });
});

























