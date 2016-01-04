var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            this.cards = [22, 11, 99];
        }
        UF.prototype.checkWord = function (word, num) {
            if (num < 0) {
                return '';
            }
            return word[num] + this.checkWord(word, num - 1);
        };
        UF.prototype.power = function (num, power) {
            if (power === 0) {
                return 1;
            }
            return num * this.power(num, power - 1);
        };
        ;
        UF.prototype.factorial = function (factorial) {
            if (factorial === 1) {
                return 1;
            }
            if (factorial < 0) {
                return -1;
            }
            return factorial * this.factorial(factorial - 1);
        };
        UF.prototype.factorialSum = function (factorialCount) {
            var sum = 1;
            for (var j = factorialCount; j > 0; j--) {
                sum = sum * j;
            }
            return sum;
        };
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
