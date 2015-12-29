var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            this.box = _.range(0, 100);
        }
        UF.prototype.guess = function (guess) {
            if (guess === this.systemGuess) {
                return 'done';
            }
            if (guess >= this.systemGuess && guess <= this.box.length) {
                var numberToRemoveFromBack = this.box.length;
                this.box.splice(guess + 1, numberToRemoveFromBack);
                return 'lower';
            }
            else {
                var indexAfterGuess = guess; //0 based 
                var numberToRemoveFromFront = 0 + guess;
                this.box.splice(0, numberToRemoveFromFront);
                return 'higher';
            }
        };
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
