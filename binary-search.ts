var _:any = require('lodash');

export module TU {
	export class UF {
	private ids:Array<any>;
	private choosen:number;
	private min:number;
	private max:number;
	private message:string;
	private nextMove:string;
	constructor() {
		this.choosen = 924;
		this.ids = _.range(1,1000);
		this.min = 1;
		this.max = 1000;
		this.nextMove = '';
	}
	
	guess = (userGuess:number) => {
		if (userGuess === this.choosen) {
			this.writeMessage('you won');
			return;
		}
		if (userGuess > this.choosen) {
			this.max = userGuess;
			this.writeMessage('number is lower then ' + userGuess);
			this.nextMove = 'lower';
		} else {
			this.min = userGuess;
			this.writeMessage('number is higher then ' + userGuess);
			this.nextMove = 'higher';
		}
	}
	
	writeMessage = (message:string) => {
		this.message = message;
	}
	getNextMove = () => {
		return this.nextMove;
	}
	
	getMin = () => {
		return this.min;
	}
	getMax = () => {
		return this.max;
	}
	getMessage = () => {
		return this.message;
	}
	
	getIds = () => {
		return this.ids;
	}
	
	}
}