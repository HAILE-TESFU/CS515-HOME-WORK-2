const sum = require('./assignment/sum');
const { assert } = require('chai');

describe("Sum", () => {
    it('Shuld retern the sum of the two numbers', () => {
        const result = sum(4, 5);
        assert.equal(result, 9)
    })
})