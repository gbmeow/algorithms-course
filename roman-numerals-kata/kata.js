var _ = require('lodash');
var repeat = require('repeat-string');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
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
        UF.prototype.getNumeralEqual = function (val) {
            var result = '';
            if (val <= 10) {
                result = this.rep[val];
                return result;
            }
            var index = 0;
            while (index < this.bases.length) {
                if (this.hasBase(val, this.bases[index])) {
                    result = this.rep[this.bases[index]];
                    val = val - Number(this.bases[index]);
                }
                index++;
            }
            if (this.canBreakEvenTen(val)) {
                var tens = this.getNumberOfTenMultiple(val);
                result += this.getStringRepeated(val);
                val = val - (10 * tens);
            }
            if (this.hasTens(val)) {
                var tens = this.getNumberOfTenMultiple(val);
                result += this.getStringRepeated(val);
                val = val - (10 * tens);
            }
            if (_.has(this.rep, val) && this.isSingles(val)) {
                result += this.rep[val];
                val = val - val;
            }
            return result;
        };
        UF.prototype.hasBase = function (val, base) {
            return Math.floor(val / Number(base)) === 1;
        };
        UF.prototype.getStringRepeated = function (val) {
            var toRepeat = this.getNumberOfTenMultiple(val);
            var temp = this.rep[10];
            return repeat(temp, toRepeat);
        };
        UF.prototype.isSingles = function (val) {
            return Math.floor(val / 10) === 0;
        };
        UF.prototype.hasTens = function (val) {
            return Math.floor(val / 10) > 0;
        };
        UF.prototype.getNumberOfTenMultiple = function (val) {
            return Math.floor(val / 10);
        };
        UF.prototype.canBreakEvenTen = function (val) {
            return (val % 10) === 0;
        };
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
