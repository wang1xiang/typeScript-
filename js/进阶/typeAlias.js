"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do
}
// handleEvent(document.getElementById('hello'), 'scroll')
// handleEvent(document.getElementById('world'), 'dbclick')
// type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种
// 元祖 tuple合并不同类型的对象， 数组合并相同类型的对象
var xcatliu = ['Xcat liu', 34];
// 枚举 用于取值被限定在一定范围内的场景， 比如一周七天、 颜色定为7种
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days[0] === 'Sun');
console.log(Days['Mon'] === 1);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
// 类 js通过构造函数实现类的概念，通过原型链实现继承，， es6使用了class
// 定义一件事物的抽象特点，包含它的属性和方法
// 对象：类的实例，通过new生成
// 面向对象三大特性：封装、继承、多态
// 封装：将对数据的操作细节隐藏起来，只暴露对外的接口
// 继承：子类继承父类
// 多态：由继承而产生了相关的不同的类，对同一方法有不同的响应
// 存取器：用以改变属性的读取和赋值行为
// 修饰符：用于限定成员或类型的性质 public、private等
// 抽象类：抽象类供其他类继承的基类，抽象类不允许被实例化，抽象类中的抽象方法必须在子类种被实现
// 接口：不同类之间共有的属性和方法，可以抽象成一个接口，接口可以被类实现
// es6属性和方法 使用class定义类，使用constructor定义构造函数
// class Work {
//   name: string;
//   constructor(name: string) {
//     this.name = name
//   }
//   sayHi(): string {
//     return `my name is ${this.name}`
//   }
// }
// let wk = new Work('it')
// wk.sayHi()
// 存取器 使用getter和setter可以改变属性的赋值和读取行为
// class Work {
//   constructor(name: string) {
//     this.name = name
//   }
//   get name() {
//     return 'jack'
//   }
//   set name(value) {
//     console.log('setter:' + value);
//   }
// }
// let wk = new Work('it')
// wk.name = 'bank'
// console.log(wk.name);
// 抽象类 abstract用于定义抽象类和其中的抽象方法
// 抽象类不允许被实例化
var Work = /** @class */ (function () {
    function Work(name) {
        this.name = name;
    }
    return Work;
}());
// let a = new Work('it') 无法创建抽象类的实例
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IT.prototype.sayHi = function () {
        return this.name;
    };
    return IT;
}(Work));
var it = new IT('it');
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    Car.prototype.lightOn = function () {
        console.log('car light on');
    };
    Car.prototype.lightOff = function () {
        console.log('car light iff');
    };
    return Car;
}());
// 接口继承类
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = { x: 1, y: 2, z: 3 };
// 声明合并 如果定义两个相同名字的函数、接口或类，那么他们会合并成一个类型
// 如果使用重载定义多个函数类型
// 接口合并 接口中的属性合并时会简单的合并到一哥接口中
// interface Alarm {
//   price: number
//   weight: number
// }
// interface Alarm {
//   price: string
//   weight: number
// }
// 类的合并与接口的合并规则一致。
