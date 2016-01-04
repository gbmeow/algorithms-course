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
	
	traverseHuni(stack:Array<number>, value:number) {
		console.log('huni ', stack[value]);
		if (value === 0) {
			return;
		}
		return value;
	}
	
	honai(value:number = 2) {
		var  huniTower = [[1,2,3], [], []];
		if (value === 0) {
			return;
		}
		console.log('here', value);
		return this.honai(value - 1) && this.traverseHuni(huniTower[value], value - 1);
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