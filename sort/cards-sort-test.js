
var UF = require('./cards-sort.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
    
    it('should sort something', function() {
        var uf = new UF.UF();
        var temp = uf.getNotSorted();
        var sorted = uf.sort();
        expect(sorted).to.deep.include.members(temp);       
    });
    
    
});
