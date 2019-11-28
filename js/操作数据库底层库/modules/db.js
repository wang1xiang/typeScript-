"use strict";
/*
  定义一个操作数据库的库  支持mysql Mssql mongodb
  功能一样 add delete update
  注意：约束同一的规范，以及代码宠用
  解决方案：需要约束规范所以定义接口，需要代码质量所以用到泛型
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 定义一个操作mysq的类 注意要实现泛型接口 类也要是泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxx'
            }, {
                title: 'xxxx',
                desc: 'xxxx'
            }
        ];
        return list;
    };
    return MysqlDB;
}());
// 定义一个操作mssql的类 
var MsSqlDB = /** @class */ (function () {
    function MsSqlDB() {
    }
    MsSqlDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSqlDB;
}());
exports.default = MysqlDB;
