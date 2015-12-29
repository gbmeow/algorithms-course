
var UF = require('./cards-sort.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
    
    it('should sort something', function() {
        var uf = new UF.UF();
        //var temp = uf.getNotSorted();
        var sorted = uf.sort();
        expect(sorted).to.deep.equal([ 0, 1, 7, 10, 11, 15, 18, 20,34, 100]);
    });
    
    it('should give me time to took to run', function() {
        var uf = new UF.UF();
        uf.sort();
        var numberOfLoop = factorial(uf.cards);
        expect(uf.counter).to.equal(numberOfLoop);
    });
    
    function factorial(items) {
        return (items.length + 1) * (items.length / 2);
    }
    
    
});
