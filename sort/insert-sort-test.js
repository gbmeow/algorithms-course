
var UF = require('./insert-sort.js').TU;
var expect = require('chai').expect;

describe("API", function() {

    beforeEach(function() {
        
    });
    
    // it('should sort something', function() {
    //     var uf = new UF.UF();
    //     uf.insert(4, 2);
    //     var expecteduf.cards = [2, 3, 5, 7, 11, 13, 9, 6];
    //     expect(uf.cards).to.deep.include.members(expecteduf.cards);  
    //     expect(uf.cards).to.have.length(expecteduf.cards.length);       
    // });
    
    //  it('should sort something 2', function() {
    //     var uf = new UF.UF();
    //     uf.insert(5, 9);
    //     var expecteduf.cards = [2, 3, 5, 7, 9, 11, 13, 6];
    //     expect(uf.cards).to.deep.include.members(expecteduf.cards);  
    //     expect(uf.cards).to.have.length(expecteduf.cards.length);       
    // });
    
    // it('starting from front sort the whole uf.cards', function() {
    //     var uf = new UF.UF();
    //     //[ 3, 5, 7, 11, 13, 2, 9, 6, '3,5,7,11,13,2,9,61': 6 ]
    //     var expectedArray = [7, 9, 11, 22, 42, 88, 99];
        
    //     for (var i = 0; i < uf.cards.length; i++) {
    //         var nextIdx = i + 1;
    //         if (uf.cards[i] > uf.cards[nextIdx]) {
    //             uf.insertOne(i, uf.cards[nextIdx]);
    //         }
    //      }
    //      console.log(uf.cards);
    //     expect(uf.cards).to.deep.include.members(expectedArray); 
    //     expect(uf.cards).to.have.length(expectedArray.length); 
    // });
    
    it('starting from front sort the whole uf.cards', function() {
        var uf = new UF.UF();
        //[ 3, 5, 7, 11, 13, 2, 9, 6, '3,5,7,11,13,2,9,61': 6 ]
        var expectedArray = [7, 9, 11, 22, 42, 88, 99];
        
        for (var i = 0; i < uf.cards.length; i++) {
            var nextIdx = i + 1;
            if (uf.cards[i] > uf.cards[nextIdx]) {
                uf.insertOne(i, uf.cards[nextIdx]);
            }
         }
         console.log(uf.cards);
        expect(uf.cards).to.deep.include.members(expectedArray); 
        expect(uf.cards).to.have.length(expectedArray.length); 
    });
   
      
});
