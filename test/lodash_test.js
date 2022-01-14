// TDD Practice
const Lodash = require("../lodash.js");
const assert = require("assert");


describe("clamp", () => {
    it("returns 3 when passed 3, 2, 4", () => {
        // Setup
        const inputArray = [3, 2, 4];
        const expectedResult = 3;

        // Excercise
        const result = Lodash.clamp(inputArray);

        // Verification
        assert.equal(result, expectedResult);
    })
})