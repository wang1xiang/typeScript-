"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tony = new Animal('tony');
// 声明变量 ts中编译器不知道$或jQuery是什么 使用declare var来定义他的类型
// $('#box')
// 这里定义全局变量$的类型，用于编译时检查
// declare var $: (selector: string) => any
// $('#box')
// 声明文件 通常把声明文件语句放在单独的文件中(jQuery.d.ts)
$('#box');
// export default es6默认导出
// 只有function、class和interface可以直接默认导出，其他需要先声明
function foo() { return 's'; }
exports.default = foo;
// const baizhi:string = 's'
// export default baizhi
// export = commonjs导出模块
