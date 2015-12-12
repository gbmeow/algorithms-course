var _:any = require('lodash');

export module TU {
	export class UF {
	private cards:Array<number>;
	constructor() {
		this.cards = [1,100,15,18,34];
	}
	
	sort = () => {
		var cards = this.cards;
		var that = this;
		_.forEach(cards, (item, idx) => {
			var nextIndex =  cards.length - 1 === idx ? cards.length - 1 : idx + 1;
			if (that.greater(item, that.cards[nextIndex])) {
				that.swap(idx, nextIndex);
			}
		});
		console.log(this.cards);
		return this.cards;
	}
	
	swap = (smallerIdx, largerIdx) => {
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