var _:any = require('lodash');

export module TU {
	export class UF {
	public cards:Array<number>;
	constructor() {
		this.cards = [22, 11, 99];
	}	
	
	checkWord(word:Array<any>, num:number) {
		if(num < 0) {
			return '';
		}
		return word[num] + this.checkWord(word, num - 1);
	}
	
	power(num:number, power:number) {
		if (power === 0) {
			return 1;
		}
		return num * this.power(num, power - 1);
 	};
	
	factorial(factorial:number) {
		if (factorial === 1) {	
			return 1;
		}
		if (factorial < 0) {
			return -1;
		}
		return factorial * this.factorial(factorial - 1);
	}
	
	
	
	factorialSum(factorialCount:number) {
		var sum = 1;
		for (var j = factorialCount; j > 0; j--) {
			sum = sum * j;
		}
		return sum;
		
	}
	
	}
}