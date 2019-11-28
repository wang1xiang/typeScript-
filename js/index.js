"use strict";
console.log('Nihao -tes');
var str = '你好';
// boolean
var flag = true;
flag = false;
console.log(flag);
// number
var num = 123;
num = 456;
console.log(num);
//string
var str1 = 'str';
str = 'asd';
console.log(str);
// array
var arr = [1, 23, 4];
var arr1 = [1, 23, 4]; //数组泛型
console.log(arr);
console.log(arr1);
var fibonacci = [1, 1, 2, 3, 5];
var list = [1, 'sdfs', { sfsf: 'sdsd' }];
// tuple 属于数组的一种
var arr2 = [1, 's'];
console.log(arr2);
// enum 
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c);
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var e = Err.null;
console.log(e);
// any任意类型 赋值后可改变类型
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber);
var anyThing = 'hello';
console.log(anyThing);
console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// anyThing.setName('tom')
// 声明时未指定类型的变量，会被识别为任意值类型
var something;
something = 'seven';
something = 7;
// any用处
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// void空值 用于定义方法时没有返回值
function alertName() {
    alert('Tom');
}
alertName();
// null 和undefined
var u = undefined;
var n = null;
// 联合类型
var unite = 'seven';
console.log(unite.length);
unite = 7;
var num1;
// num1 = 1
console.log(num1);
// console.log(unite.length); 报错
// 不确定联合类型变量到底是哪个类型时，只能访问此联合类型所有类型共有的属性和方法
function getString(something) {
    return something.toString();
    // return something.length
}
