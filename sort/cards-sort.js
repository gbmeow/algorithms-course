var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            var _this = this;
            this.sort = function () {
                var array = _this.cards;
                for (var i = 0; i <= array.length; i++) {
                    for (var j = i + 1; j <= array.length; j++) {
                        _this.counter++;
                        if (array[i] >= array[j]) {
                            var temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                        }
                    }
                }
                return array;
            };
            // sort = () => {
            // 	var cards = this.cards;
            // 	var that = this;
            // 	_.forEach(cards, (item, idx) => {
            // 		var lastItemInArray = cards.length - 1 === idx;
            // 		var lastIdx = cards.length - 1;
            // 		var nextIndex = lastItemInArray ? lastIdx : idx + 1;
            // 		if (that.greater(item, that.cards[nextIndex])) {
            // 			that.swap(idx, nextIndex);
            // 		}
            // 	});
            // 	return this.cards;
            // }
            this.swap = function (smallerIdx, largerIdx) {
                _this.counter++;
                console.log('here', _this.counter);
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
            this.cards = [1, 100, 15, 18, 34, 0, 11, 7, 10, 20];
            this.counter = 0;
        }
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
