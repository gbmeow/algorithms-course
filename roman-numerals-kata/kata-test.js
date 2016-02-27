var UF = require('./kata.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
	
	it('should give us any number between 1 - 3 in I', function() {
		var uf = new UF.UF();
        var check = uf.getNumeralEqual(3);
        expect(check).to.equal('III');
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
     
     it('shoudl pass up to 39', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(39);
        expect(check).to.equal('XXXIX');
     });
     
     it('shoudl pass from 40', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(40);
        expect(check).to.equal('XL');
     });
     
     it('shoudl pass from 41', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(41);
        expect(check).to.equal('XLI');
     });
     
     it('shoudl pass from 50', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(50);
        expect(check).to.equal('L');
     });
     
     it('shoudl pass from 65', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(65);
        expect(check).to.equal('LXV');
     });
     
     it('shoudl pass from 90', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(90);
        expect(check).to.equal('XC');
     });
     
     it('shoudl pass from 95', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(95);
        expect(check).to.equal('XCV');
     });
     
     it('shoudl pass from 100', function() {
         var uf = new UF.UF();
        var check = uf.getNumeralEqual(100);
        expect(check).to.equal('C');
     });
     
     
     
     
     
     
     
     
    
     
     
});