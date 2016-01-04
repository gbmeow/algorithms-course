var UF = require('./recursion.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
	
	it('should check palindromes rotor', function() {
		var uf = new UF.UF();
		var expected = 'rotor';
		var arrayFormat = expected.split('');
		var length = 5 - 1;
		var res = uf.checkWord(arrayFormat, length);
		expect(res).to.equal(expected);
	});
	
	it('should check palindromes redder', function() {
		var uf = new UF.UF();
		var expected = 'redder';
		var arrayFormat = expected.split('');
		var length = 6 - 1;
		var res = uf.checkWord(arrayFormat, length);
		expect(res).to.equal(expected);
	});
	
	it('should check palindromes tennis', function() {
		var uf = new UF.UF();
		var expected = 'tennis';
		var arrayFormat = expected.split('');
		var length = 6 - 1;
		var res = uf.checkWord(arrayFormat, length);
		expect(res).to.not.equal(expected);
	});
	
	it('should check palindromes a', function() {
		var uf = new UF.UF();
		var expected = 'a';
		var arrayFormat = expected.split('');
		var length = 1 - 1;
		var res = uf.checkWord(arrayFormat, length);
		expect(res).to.equal(expected);
	});
	
	it('should power it up for 2', function() {
		var uf = new UF.UF();
		var res = uf.power(2, 4);
		expect(res).to.equal(16);
	});
	
	it('should power it up for 100', function() {
		var uf = new UF.UF();
		var res = uf.power(100, 2);
		expect(res).to.equal(10000);
	});
	
	it('should GO OVER HUNAI', function() {
			var uf = new UF.UF();
			var res = uf.honai();
			expect(res).to.equal(10000);
	});

	
});