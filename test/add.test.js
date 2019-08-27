
const add = require('../lib/add.js')
const expect = require('chai').expect

describe('add function test', () => {
    it(' 1 + 1 equal 2', () => {
        expect(add(1, 1)).to.be.equal(2)
    })
    it(' -1 + 0 equal 0', () => {
        expect(add(-1, 1)).to.be.equal(0)
    })
})
