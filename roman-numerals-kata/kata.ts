var _:any = require('lodash');
var repeat = require('repeat-string');

export module TU {
	export class UF {
    private rep:any;
    
	constructor() {
        this.rep = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            10: 'X',
            40: 'XL',
            50: 'L',
            90: 'XC',
            100: 'C'
        };
	}
    
    getNumeralEqual(val:number) {
        
        var result = '';
        if (val <= 10) {
            result = this.rep[val];
            return result;
        }
        
        if(val > 10) {
                if(this.canBreakLargeNumber(val, 100)) {
                            result = this.rep[100];
                            val = val - 100;
                        }
                if(this.canBreakLargeNumber(val, 90)) {
                        result = this.rep[90];
                        val = val - 90;
                    }
                if(this.canBreakLargeNumber(val, 50)) {
                    result = this.rep[50];
                    val = val - 50;
                }
                if(this.canBreakLargeNumber(val, 40)) {
                    result = this.rep[40];
                    val = val - 40;
                }
                if(this.canBreakEvenTen(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result +=  this.getStringRepeated(val);
                    val = val - (10 * tens);
                    return result;
                } 
                if(this.hasTens(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result +=  this.getStringRepeated(val);
                    val = val - (10 * tens);
                }
                if (this.isSingles(val)) {
                    result += this.rep[val];
                    val = val - val;
                }
            }     
      
        return result;
    }	
   
   isInsideForty(val:number) {
       return val >= 40 && val <= 49;
   }
    
    getStringRepeated(val:number) {
        var toRepeat = this.getNumberOfTenMultiple(val);
        var temp = this.rep[10]; 
        return repeat(temp, toRepeat);
    }
    
    isSingles(val:number) {
        return Math.floor(val / 10) === 0;
    }
   
   hasTens(val:number) {
       return Math.floor(val / 10) > 0;
   }
    
    getNumberOfTenMultiple(val:number) {
        return Math.floor(val / 10);
    }
    
    canBreakEvenTen(val:number):boolean {
        return (val % 10) === 0;
    }
    
    canBreakLargeNumber(currentval:number, base:number) {
        return Math.floor(currentval / base) === 1;
    }
    canBreakFifty(val:number) {
        return Math.floor(val / 50);
    }
	
	
	}
}