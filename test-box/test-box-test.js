var UF = require('./test-box.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
	
	it('should do binary serach', function() {
		var uf = new UF.UF();
		uf.systemGuess = 25;
		var res = uf.guess(75);
		expectArrayItems(uf.box, 0, 75, res, 'lower');
		
		res = uf.guess(35);
		expectArrayItems(uf.box, 0, 35, res, 'lower');
		
		res = uf.guess(20);
		expectArrayItems(uf.box, 20, 35, res, 'higher');
		
		res = uf.guess(25);
		expect(res).to.equal('done');
		
	});
	
	it('should do binary serach on 40', function() {
		var uf = new UF.UF();
		uf.systemGuess = 40;
		var res = uf.guess(100);
		expect(res).to.equal('lower');
		res = uf.guess(50);
		expect(res).to.equal('lower');
		res = uf.guess(25);
		expect(res).to.equal('higher');
		res = uf.guess(37);
		expect(res).to.equal('higher');
		res = uf.guess(40);
		expect(res).to.equal('done');
		
	});
	
	function expectArrayItems(array, first, last, res, use) {
		expect(array[0]).to.equal(first);
		expect(array[array.length - 1]).to.equal(last);	
		expect(res).to.equal(use);
	}
	
	
});