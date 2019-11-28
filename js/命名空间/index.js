"use strict";
/*
  命名空间：
    代码量大的情况下，为避免各种变量命名冲突，可将相似功能的函数、类、接口放置在命名空间种
    同java的jar包 typescript的命名空间可以将代码包裹取来，之对外暴露需要在外部访问的对象 命名空间的对象通过export

  命名空间和模块区别：
    命名空间：内部模块，主要用于组织代码，避免代码冲突
    模块： ts外部模块的简称，侧重代码的服用，一个模块可能有多个命名空间
*/
// namespace A {
//   export class User {
//     name: string | undefined
//     constructor(name: string) {
//       this.name = name
//     }
//     run(): void {
//       console.log(this.name);
//     }
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let useuserr = new A.User('xiaoli')
// useuserr.run()
var a_1 = require("./modules/a");
var d = new a_1.A.User('sss');
d.run();
