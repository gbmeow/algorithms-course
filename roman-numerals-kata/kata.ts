var _:any = require('lodash');

export module TU {
	export class UF {

	constructor() {
	}
    
    getNumeralEqual(val:number) {
        var rep = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            10: 'X'
        };
        var result = '';
        if (val <= 10) {
            result = rep[val];
        }
        if (val > 10) {
            var numberOfTen = this.getNumberOfTenMultiple(val);
            var remaining = val - (10 * numberOfTen);
            var temp = rep[10]; 
            result = temp.repeat(numberOfTen) + rep[remaining]; 
        } 
        if (this.canBreakTen(val) && val > 10) {
            var toRepeat = this.getNumberOfTenMultiple(val);
            var temp = rep[10]; 
            result = temp.repeat(toRepeat);
        }
        
        return result;
        
        //approching the number - you need previous + next
    }	
    
    getNumberOfTenMultiple(val:number) {
        return (val / 10);
    }
    
    canBreakTen(val:number):boolean {
        return (val % 10) === 0;
        //are we even if we break by 10 
            //if not - what is the reminder 
    }
	
	
	}
}