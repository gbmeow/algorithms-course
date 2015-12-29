
var UF = require('./recursion.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
    
    it('should return factorial of any number', function() {
        var uf = new UF.UF();
        expect(uf.factorialSum(5)).to.equal(120);
    });
    
    it('should give factorial recursively', function() {
        var uf = new UF.UF();
        var res = uf.factorial(8);
        expect(res).to.equal(40320);
        var res = uf.factorial(5);
        expect(res).to.equal(120);
    });
       
   
      
});