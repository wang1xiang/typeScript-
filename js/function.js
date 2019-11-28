"use strict";
// 函数定义
// 函数声明式
function run() {
    return 'run';
}
// 匿名函数
var fun = function () {
    return 234;
};
alert(fun());
// ts定义方法传参
function getInfo(name, age) {
    return name + "---" + age;
}
alert(getInfo('zhangsan', 12));
// 可选参数 必须配置到参数最后面
// ts中参数实参和形参必须一样，如果不一样需要配置可选参数
function getInfo1(name, age) {
    return name + "---" + age;
}
alert(getInfo1('zhangsan'));
// 默认参数
// es6和ts都可以设置默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    return name + "---" + age;
}
alert(getInfo2('zhangsan'));
alert(getInfo2('zhangsan', 30));
// 剩余参数 三点运算符接收形参传过来的值
function sum(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4, 5, 6));
function getInfo3(name, age) {
    if (age) {
        return "\u6211\u53EB\uFF1A" + name + "\uFF0C\u6211\u7684\u5E74\u9F84\u662F\uFF1A" + age;
    }
    else {
        return "\u6211\u53EB\uFF1A" + name;
    }
}
alert(getInfo3('zhangsan'));
alert(getInfo3('zhangsan', 20));
function reserve(x) {
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    else if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
}
reserve('12334');
// 断言
// 类型断言 需要断言的变量前加上<Type>即可
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 类型断言 不是类型转换
// function toBoolean(something: string | number): boolean {
//   return <boolean>something
// }
