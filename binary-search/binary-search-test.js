
var UF = require('./binary-search.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });

    // it('should connect two', function() {
    //     var uf = new UF.UF();
    //     var check = uf.getIds();
    //     expect(check).to.have.length(999);
    // });
    
    // it('should provide result when user guessed the number', function() {
    //     var uf = new UF.UF();
    //     uf.guess(100);
    //     expect(uf.getMessage()).to.equal('you won');
    // });
    
    // it('should set a smaller range based on user guess', function() {
    //     var uf = new UF.UF();
    //     uf.guess(10);
    //     expect(uf.getMin()).to.equal(10);
    //     expect(uf.getMax()).to.equal(1000);
    // });
    
    // it('should set a smaller ranges based on user guess', function() {
    //     var uf = new UF.UF();
    //     var guess = 10;
    //     uf.guess(guess);
    //     runExpects(uf, guess, 10, 1000);
        
    //     guess = 500;
    //     uf.guess(guess);
    //     runExpectsLower(uf, guess, 10, 500);
        
    //     guess = 255;
    //     uf.guess(guess);
    //     runExpectsLower(uf, guess, 10, 255);
        
    //     guess = 133;
    //     uf.guess(guess);
    //     runExpectsLower(uf, guess, 10, 133);
        
    //     guess = 72;
    //     uf.guess(guess);
    //     runExpects(uf, guess, 72, 133);
        
    //     guess = 102;
    //     uf.guess(guess);
    //     runExpectsLower(uf, guess, 72, 102);
        
    //     guess = 102;
    //     uf.guess(guess);
    //     runExpectsLower(uf, guess, 72, 102);
        
    //     guess = 86;
    //     uf.guess(guess);
    //     runExpects(uf, guess, 86, 102);
        
    //     guess = 94;
    //     uf.guess(guess);
    //     runExpects(uf, guess, 94, 102);
        
    //     guess = 94;
    //     uf.guess(guess);
    //     runExpects(uf, guess, 94, 102);
        
    //     guess = midPoint(94, 102);
    //     uf.guess(guess);
    //     runExpects(uf, guess, 98, 102);
        
    //     guess = midPoint(98, 102);
    //     uf.guess(guess);
    //     runExpects(uf, guess, 98, 102);
         
            
    // });
    
    it('should find the number by itself with initial guess', function() {
        var uf = new UF.UF();
        var initialGuess = 10;
        var won = false;
        uf.guess(initialGuess);
        var nextGuess = midPoint(uf.getMin(), uf.getMax());
        while (won !== true) {
          nextGuess = Math.floor(nextGuess);
          uf.guess(nextGuess);
          if (uf.getNextMove() === 'lower') {
              nextGuess = midPoint(uf.getMin(), nextGuess);
          } else {
              nextGuess = midPoint(nextGuess, uf.getMax());
          }
          if (uf.getMessage() == 'you won') {
              expect(uf.getMessage()).to.equal('you won');
              won = true;
          }
         
        }  
            
    });
    
    function midPoint(min, max) {
        return (max + min) / 2;
    }
    
    function runExpects(uf, userGuess, min, max) {
        expect(uf.getMessage()).to.equal('number is higher then ' + userGuess);
        expect(uf.getMin()).to.equal(min);
        expect(uf.getMax()).to.equal(max);
    }
    
    function runExpectsLower(uf, userGuess, min, max) {
        expect(uf.getMessage()).to.equal('number is lower then ' + userGuess);
        expect(uf.getMin()).to.equal(min);
        expect(uf.getMax()).to.equal(max);
    }
    
    
});
