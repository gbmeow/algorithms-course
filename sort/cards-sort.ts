var _:any = require('lodash');

export module TU {
	export class UF {
	public cards:Array<number>;
	public counter:number;
	constructor() {
		this.cards = [1,100,15,18,34, 0, 11, 7, 10, 20];
		this.counter = 0;
	}
	
	
	
	sort = () => {
		var array = this.cards;
		for (var i = 0; i <= array.length; i++) {
			for (var j = i + 1; j <= array.length; j++) {
				this.counter++;
				if (array[i] >= array[j]) {
					var temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			}
		}
		return array;
	};
	
	
	// sort = () => {
	// 	var cards = this.cards;
	// 	var that = this;
	// 	_.forEach(cards, (item, idx) => {
	// 		var lastItemInArray = cards.length - 1 === idx;
	// 		var lastIdx = cards.length - 1;
	// 		var nextIndex = lastItemInArray ? lastIdx : idx + 1;
	// 		if (that.greater(item, that.cards[nextIndex])) {
	// 			that.swap(idx, nextIndex);
	// 		}
	// 	});
	// 	return this.cards;
	// }
	
	swap = (smallerIdx, largerIdx) => {
		this.counter++;
		console.log('here', this.counter);
		var temp = this.cards[smallerIdx];
		this.cards[smallerIdx] = this.cards[largerIdx]; 
		this.cards[largerIdx] = temp; 
	}
	
	greater = (first:number, second:number) => {
		return first >= second;
	}
	
	getNotSorted = () => {
		var cp = this.cards;
		return _.sortBy(cp, (num) => {return num;});
	}
	
	
	}
}