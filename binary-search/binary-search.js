var _ = require('lodash');
var TU;
(function (TU) {
    var UF = (function () {
        function UF() {
            var _this = this;
            this.guess = function (userGuess) {
                if (userGuess === _this.choosen) {
                    _this.writeMessage('you won');
                    return;
                }
                if (userGuess > _this.choosen) {
                    _this.max = userGuess;
                    _this.writeMessage('number is lower then ' + userGuess);
                    _this.nextMove = 'lower';
                }
                else {
                    _this.min = userGuess;
                    _this.writeMessage('number is higher then ' + userGuess);
                    _this.nextMove = 'higher';
                }
            };
            this.writeMessage = function (message) {
                _this.message = message;
            };
            this.getNextMove = function () {
                return _this.nextMove;
            };
            this.getMin = function () {
                return _this.min;
            };
            this.getMax = function () {
                return _this.max;
            };
            this.getMessage = function () {
                return _this.message;
            };
            this.getIds = function () {
                return _this.ids;
            };
            this.choosen = 924;
            this.ids = _.range(1, 1000);
            this.min = 1;
            this.max = 1000;
            this.nextMove = '';
        }
        return UF;
    })();
    TU.UF = UF;
})(TU = exports.TU || (exports.TU = {}));
