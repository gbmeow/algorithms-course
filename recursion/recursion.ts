var _:any = require('lodash');

export module TU {
	export class UF {
	public cards:Array<number>;
	constructor() {
		this.cards = [22, 11, 99];
	}
	

	// factorial(factorial:number) {
	// 	var sum = 1;
	// 	while (factorial > 1) {
	// 		sum = sum * this.subFactorial(factorial);
	// 		factorial = factorial - 2;
	// 	}
	// 	return sum;
	// }
	
	// subFactorial(factorial:number) {
	// 	return factorial * (factorial - 1);
	// }
	
	
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