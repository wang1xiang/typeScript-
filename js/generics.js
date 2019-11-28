"use strict";
// 泛型指在定义函数、接口或类时，不预先指定具体的类型，而在使用的时候在指定类型
// 就是解决类 接口 方法的复用性 以及对不特定数据类型的支持
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'asdas'));
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray1(3, 'x'));
console.log(createArray1(3, true));
// 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven']));
console.log(swap([7, 'seven']));
// function loggingIdentify<T>(arg: T): T {
//   console.log(arg.length); //类型“T”上不存在属性“length”
//   return arg
// }
function loggingIdentify(arg) {
    console.log(arg.length);
    return arg;
}
var log = {
    length: 12
};
loggingIdentify('sss');
loggingIdentify(log);
// 多个类型参数之间互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));
/* 泛型类
  class MinClass<T> {
    list: T[] = []
    add (value: T) {
      this.list.push(value)
    }
    min(): T {
      let minNum = this.list[0]
      for (let i = 0; i < this.list.length; i++) {
        if (minNum > this.list[i]) {
          minNum = this.list[i]
        }
      }
      return minNum
    }
  }
  let m = new MinClass<number>()
  m.add(2)
  m.add(56)
  m.add(22)
  let m1 = new MinClass<string>()
  m1.add('asd')
  m1.add('as')
  m1.add('asdf')
  alert(m.min())
  alert(m1.min())
  泛类 泛型可以帮助我们皮面重复的代码 以及类型检验的支持 下面例子把类当作参数的泛型类
  1.定义类
  2.把类作为参数来约束数据传入的类型
 */
// class User {
//   username: string | undefined
//   password: string | undefined
// }
// class MysqlDb {
//   add(user: User): boolean {
//     console.log(user);
//     return true
//   }
// }
// let us = new User()
// us.username = 'zhangsan'
// us.password = '123455'
// let db = new MysqlDb()
// db.add(us)
// class ArticleCate {
//   title: string | undefined
//   desc: string | undefined
//   status: number | undefined
// }
// class MysqlDb {
//   add(info: ArticleCate): boolean {
//     console.log(info);
//     return true
//   }
// }
// let ac = new ArticleCate()
// ac.title = '国内'
// ac.desc = '国内新闻'
// ac.status = 1
// let db = new MysqlDb()
// db.add(ac)
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return ArticleCate;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
var ac = new ArticleCate({
    title: '国内',
    desc: '国内新闻'
});
var us = new User();
us.username = 'zhangsan';
us.password = '123455';
var db = new MysqlDb();
var db1 = new MysqlDb();
db.add(us);
db1.add(ac);
function getData(value) {
    return value;
}
var myGetData = getData;
myGetData('20');
