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
        }
        UF.prototype.getNumeralEqual = function (val) {
            var result = '';
            if (val <= 10) {
                result = this.rep[val];
                return result;
            }
            if (val > 10) {
                if (this.canBreakLargeNumber(val, 100)) {
                    result = this.rep[100];
                    val = val - 100;
                }
                if (this.canBreakLargeNumber(val, 90)) {
                    result = this.rep[90];
                    val = val - 90;
                }
                if (this.canBreakLargeNumber(val, 50)) {
                    result = this.rep[50];
                    val = val - 50;
                }
                if (this.canBreakLargeNumber(val, 40)) {
                    result = this.rep[40];
                    val = val - 40;
                }
                if (this.canBreakEvenTen(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result += this.getStringRepeated(val);
                    val = val - (10 * tens);
                    return result;
                }
                if (this.hasTens(val)) {
                    var tens = this.getNumberOfTenMultiple(val);
                    result += this.getStringRepeated(val);
                    val = val - (10 * tens);
                }
                if (this.isSingles(val)) {
                    result += this.rep[val];
                    val = val - val;
                }
            }
            return result;
        };
        UF.prototype.isInsideForty = function (val) {
            return val >= 40 && val <= 49;
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
        UF.prototype.canBreakLargeNumber = function (currentval, base) {
            return Math.floor(currentval / base) === 1;
        };
        UF.prototype.canBreakFifty = function (val) {
            return Math.floor(val / 50);
        };
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
