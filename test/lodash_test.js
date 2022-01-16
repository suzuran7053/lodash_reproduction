// TDD Practice
const Lodash = require("../lodash.js");
const assert = require("assert");


describe("Lodash", () => {
    /* 
        describe(".clamp", () => {
            it("return message when string is passed", () => {
                // Setup
                const num = "3";
                const low = 2;
                const up = 4;
                const expectedResult = "You need to pass three numbers.";

                // Excercise
                const result = Lodash.clamp(num, low, up);

                // Verification
                assert.strictEqual(result, expectedResult);
            })
            it("return 3 when 3, 2, 4 is passed", () => {
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

            it("return 2 when 1, 2, 4 is passed", () => {
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

            it("return 4 when 5, 2, 4 is passed", () => {
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
        it("return true when 5, 1, 10 is passed", () => {
            const num = 5;
            const start = 1;
            const end = 10;
            const expectedResult = true;

            const result = Lodash.inRange(num, start, end);

            assert.strictEqual(result, expectedResult);
        })
        it("return true when 4, 8 is passed", () => {
            const num = 4;
            const start = 8;
            const end = undefined;
            const expectedResult = true;

            const result = Lodash.inRange(num, start, end);
            assert.strictEqual(result, expectedResult);
        })
        it("return false when -3, -2, -6 is passed", () => {
            const num = -3;
            const start = -2;
            const end = -6;
            const expectedResult = true;

            const result = Lodash.inRange(num, start, end);
            assert.strictEqual(result, expectedResult);
        })      
    })  */

    describe(".word", () => {
        it("return ['fred', 'barney', 'pebbles'] when 'fred, barney, pebbles' is passed", () => {
            const str = 'fred barney pebbles';
            const expectedResult = ['fred', 'barney', 'pebbles'];
            const result = Lodash.words(str);
            assert.deepStrictEqual(result, expectedResult);
        })
    })


})