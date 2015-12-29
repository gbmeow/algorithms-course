var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            var _this = this;
            //http://stackoverflow.com/questions/30023736/mocha-breakpoints-using-visual-studio-code
            // sort = () => {
            // 	var cards = this.cards;
            // 	var that = this;
            // 	_.forEach(cards, (item, idx) => {
            // 		var nextIndex =  cards.length - 1 === idx ? cards.length - 1 : idx + 1;
            // 		if (that.greater(item, that.cards[nextIndex])) {
            // 			that.swap(idx, nextIndex);
            // 		}
            // 	});
            // 	return this.cards;
            // }
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
            this.insertOne = function (biggerIdx, finalVal) {
                for (var i = biggerIdx; i >= 0; i--) {
                    if (_this.cards[i] > finalVal) {
                        _this.cards[i + 1] = _this.cards[i];
                        biggerIdx - 1;
                    }
                }
                _this.cards[biggerIdx] = finalVal;
            };
            //this.cards = [22, 11, 99, 88, 9, 7, 42];
            this.cards = [22, 11, 99];
        }
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
