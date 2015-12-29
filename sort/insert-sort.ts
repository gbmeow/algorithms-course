var _:any = require('lodash');

export module TU {
	export class UF {
	public cards:Array<number>;
	constructor() {
		//this.cards = [22, 11, 99, 88, 9, 7, 42];
		this.cards = [22, 11, 99];
	}
	
	//http://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code
	
	// sort = () => {
	// 	var cards = this.cards;
	// 	var that = this;
	// 	_.forEach(cards, (item, idx) => {
	// 		var nextIndex =  cards.length - 1 === idx ? cards.length - 1 : idx + 1;
	// 		if (that.greater(item, that.cards[nextIndex])) {
	// 			that.swap(idx, nextIndex);
	// 		}
	// 	});
	// 	return this.cards;
	// }
	
	// insert = (rightIndex:number, value:number) => {
	// 	var indexOfValueToSplice = rightIndex + 1;
	// 	for (var currentIndex = 0; currentIndex < this.cards.length; currentIndex++) {
	// 		if (value < this.cards[currentIndex]) {
	// 			this.cards.splice(indexOfValueToSplice, 1);
	// 			this.incrementBackOfArray(currentIndex); //currentIndex = 3
	// 			this.cards[currentIndex] = value;
	// 			return;
	// 		}
	// 	}
	// }
	

	 insertOne = (biggerIdx: number, finalVal:number) => {
	
        for (var i = biggerIdx; i >= 0; i--) {
             if (this.cards[i] > finalVal) {
                this.cards[i+1] = this.cards[i];
				biggerIdx - 1;
            }    
        }
        this.cards[biggerIdx] = finalVal;
    }
	
	
	// insertOne = (currentIdx:number, finalvalue:number) => {
	// 	var lastSwappedIdx = currentIdx;
	// 	for (var i = currentIdx; i >= 0 && this.cards[i] > this.cards[i + 1]; i--) {
	// 		this.cards[i + 1] = this.cards[i];
	// 		lastSwappedIdx - 1;
	// 	}
	// 	this.cards[lastSwappedIdx] = finalvalue;
	// }

	

	
	// swap = (smallerIdx, largerIdx) => {
	// 	var temp = this.cards[smallerIdx];
	// 	this.cards[smallerIdx] = this.cards[largerIdx]; 
	// 	this.cards[largerIdx] = temp; 
	// }
	
	// greater = (first:number, second:number) => {
	// 	return first >= second;
	// }
	
	// getNotSorted = () => {
	// 	var cp = this.cards;
	// 	return _.sortBy(cp, (num) => {return num;});
	// }
	
		// insertOne = (rightIndex:number, value:number) => {
	// 	for(var j = rightIndex; j >= 0 && this.cards[j] > value; j--) {
    //    		this.cards[j + 1] = this.cards[j];
    // 	}   
    // 	this.cards[j + 1] = value; 
	// }
	// 	incrementBackOfArray = (fromIndex:number) => {
	// 	var subset = this.cards.slice();		
	// 	for (var i = fromIndex; i < subset.length; i++) {
    //         this.cards[i + 1] = subset[i];
	// 	}
	// }
	
	
	}
}