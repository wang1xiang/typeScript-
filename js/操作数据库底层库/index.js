"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./modules/db"));
// 用户表中添加数据 定义user类和数据库表做映射
var DbUser = /** @class */ (function () {
    function DbUser() {
    }
    return DbUser;
}());
var du = new DbUser();
du.username = 'zhangsan';
du.passWord = '123456';
var oMysql = new db_1.default(); // 类作为参数约束数据传入的类型
oMysql.add(du);
// console.log(oMysql.get(4));
// import { getDa as get, dbUrl } from './db'
// console.log(dbUrl);
// get() // 使用as重命名
