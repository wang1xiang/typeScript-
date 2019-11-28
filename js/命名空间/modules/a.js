"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        User.prototype.run = function () {
            console.log(this.name);
        };
        return User;
    }());
    A.User = User;
})(A = exports.A || (exports.A = {}));
// 命名空间作为模块
