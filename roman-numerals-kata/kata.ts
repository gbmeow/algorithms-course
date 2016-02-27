var _:any = require('lodash');
var repeat = require('repeat-string');

export module TU {
	export class UF {
    private rep:any;
    private bases:Array<string>;
    
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
        this.bases = ['100', '90', '50', '40'];
	}
    
    getNumeralEqual(val:number) {
        
        var result = '';
        if (val <= 10) {
            result = this.rep[val];
            return result;
        }
        
                var index = 0;
                while(index < this.bases.length) {
                    if(this.hasBase(val, this.bases[index])) {
                        result = this.rep[this.bases[index]];
                        val = val - Number(this.bases[index]);
                    }
                    index++;
                }
                if(this.canBreakEvenTen(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result +=  this.getStringRepeated(val);
                    val = val - (10 * tens);
                } 
                if(this.hasTens(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result +=  this.getStringRepeated(val);
                    val = val - (10 * tens);
                }
                if (_.has(this.rep, val) && this.isSingles(val)) {
                    result += this.rep[val];
                    val = val - val;
                }
    
      
        return result;
    }	
    
    hasBase(val:number, base) {
        return Math.floor(val / Number(base)) === 1;
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
   
	
	}
}