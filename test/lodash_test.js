// TDD Practice
const Lodash = require("../lodash.js");
const assert = require("assert");


describe("Lodash", () => {

    describe(".clamp", () => {
        it("returns 3 when passed 3, 2, 4", () => {
            // Setup
            const num = 3;
            const low = 2;
            const up = 4;
            const expectedResult = 3;

            // Excercise
            const result = Lodash.clamp(num, low, up);

            // Verification
            assert.strictEqual(result, expectedResult);
        })

        it("returns 2 when passed 1, 2, 4", () => {
            // Setup
            const num = 1;
            const low = 2;
            const up = 4;
            const expectedResult = 2;

            // Excercise
            const result = Lodash.clamp(num, low, up);

            // Verification
            assert.strictEqual(result, expectedResult);
        })

        it("returns 4 when passed 5, 2, 4", () => {
            // Setup
            const num = 5;
            const low = 2;
            const up = 4;
            const expectedResult = 4;

            // Excercise
            const result = Lodash.clamp(num, low, up);

            // Verification
            assert.strictEqual(result, expectedResult);
        })
    })


    describe(".inRange", () => {
        it("returns true when passed 5, 1, 10", () => {
            const num = 5;
            const start = 1;
            const end = 10;
            const expectedResult = true;

            const result = Lodash.inRange(num, start, end);

            assert.strictEqual(result, expectedResult);
        })
    })
})