var UF = require('./kata.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
	
	it('should give us any number between 1 - 3 in I', function() {
		var uf = new UF.UF();
        for (var i = 1; i <= 3; i++) {
            var check = uf.getNumeralEqual(i);
            expect(check).to.equal('I'.repeat(i));
        }
     });

    it('should give us egde number 4', function() {
		var uf = new UF.UF();
        var check = uf.getNumeralEqual(4);
        expect(check).to.equal('IV');
     });
     
     it('should give us a multiple of 10', function() {
		var uf = new UF.UF();
        var check = uf.getNumeralEqual(20);
        expect(check).to.equal('XX');
     });
     
      it('should assemble in between numbers with existing numerals', function() {
		var uf = new UF.UF();
        var check = uf.getNumeralEqual(19);
        expect(check).to.equal('XIX');
     });
});