var _:any = require('lodash');

export module TU {
	export class UF {
	public box:Array<number>;
	public systemGuess:number;
	constructor() {
		this.box = _.range(0, 100);
	}
	
	guess(guess:number) {
		if (guess === this.systemGuess) {
			return 'done';
		}
		if (guess >= this.systemGuess && guess <= this.box.length) {
			var numberToRemoveFromBack = this.box.length;
			this.box.splice(guess + 1, numberToRemoveFromBack);
			return 'lower';
		} else {
			var indexAfterGuess = guess; //0 based 
			var numberToRemoveFromFront = 0 + guess;
			this.box.splice(0, numberToRemoveFromFront);
			return 'higher';
		}
	
	}
	
	
	
	}
}