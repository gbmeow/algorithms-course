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
            this.cards = [1, 100, 15, 18, 34];
        }
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
