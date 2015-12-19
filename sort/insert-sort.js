var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            var _this = this;
            //http://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code
            this.sort = function () {
                var cards = _this.cards;
                var that = _this;
                _.forEach(cards, function (item, idx) {
                    var nextIndex = cards.length - 1 === idx ? cards.length - 1 : idx + 1;
                    if (that.greater(item, that.cards[nextIndex])) {
                        that.swap(idx, nextIndex);
                    }
                });
                return _this.cards;
            };
            // insert = (rightIndex:number, value:number) => {
            // 	var indexOfValueToSplice = rightIndex + 1;
            // 	for (var currentIndex = 0; currentIndex < this.cards.length; currentIndex++) {
            // 		if (value < this.cards[currentIndex]) {
            // 			this.cards.splice(indexOfValueToSplice, 1);
            // 			this.incrementBackOfArray(currentIndex); //currentIndex = 3
            // 			this.cards[currentIndex] = value;
            // 			return;
            // 		}
            // 	}
            // }
            this.insertOne = function (currentIdx, finalvalue) {
                var lastSwappedIdx = currentIdx;
                for (var i = currentIdx; i >= 0 && _this.cards[i] > _this.cards[i + 1]; i--) {
                    _this.cards[i + 1] = _this.cards[i];
                    lastSwappedIdx - 1;
                }
                _this.cards[lastSwappedIdx] = finalvalue;
            };
            this.swap = function (smallerIdx, largerIdx) {
                var temp = _this.cards[smallerIdx];
                _this.cards[smallerIdx] = _this.cards[largerIdx];
                _this.cards[largerIdx] = temp;
            };
            this.greater = function (first, second) {
                return first >= second;
            };
            this.getNotSorted = function () {
                var cp = _this.cards;
                return _.sortBy(cp, function (num) { return num; });
            };
            this.cards = [22, 11, 99, 88, 9, 7, 42];
            //this.cards = [22, 11, 99];
        }
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
