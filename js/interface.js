"use strict";
/*
  接口作用：面向对象编程中，接口是一种规范的定义
*/
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
var tom1 = {
    name: 'tom1',
};
console.log(tom1);
var tom2 = {
    name: 'tom2',
    sex: 'male',
    sdf: 'sdf'
};
console.log(tom2);
var tom4 = {
    id: 123,
    name: 'tom4',
    sex: 'male'
};
// tom4.id = 90 Cannot assign to 'id' because it is a read-only property
console.log(tom4);
function printName(name) {
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '--' + name.secondName);
}
var obj = {
    age: 12,
    firstName: 'zhang',
    secondName: 'san'
};
// 如果直接调用对象 必须为firstName和secondName 不能传其他属性
printName(obj);
// 原声js封装ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('成功');
            if (config.dataType === 'json') {
                JSON.parse(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: 'name?zhangsan',
    url: 'http://www.baidu.com',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + "\u5728\u641E" + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + "\u5403\u9992\u5934");
    };
    Web.prototype.work = function () {
        console.log(this.name + "\u5199\u4EE3\u7801");
    };
    return Web;
}(Programmer));
var w = new Web('xiaoku');
w.work();
w.coding('ts程序');
