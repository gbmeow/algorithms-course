var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
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
