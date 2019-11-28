"use strict";
/*
  js中使用ESLint进行代码检查， 搭配typescript-eslint-parser后，可以用来检查typescript代码
  TSLint 与 ESLint 类似，不过除了能检查常规的 js 代码风格之外，TSLint 还能够通过 TypeScript 的语法解析，利用类型系统做一些 ESLint 做不到的检查
  为什么需要代码检查 相同逻辑不同人下出来可能有很大区别
  1.缩进用空格还是table
  2.是否禁用var
  3.接口名是否应该以I开头
  4.是否强制使用 === 而不是 ==
  安装eslint
  1.npm install eslint --save-dev
  eslint无法识别typescript的一些语法，故安装typescript-eslint-parser，替代默认的解析器，同时需要安装typescript
  2.npm install typescript typescript-eslint-parser --save-dev
  安装eslint-plugin-typescript 弥补支持性不好的规则
  3.npm install eslint-plugin-typescript --save-dev
  eslint需要配置文件决定对哪些规则进行检查，配置文件名称为.eslintrc.js或.eslintrc.json
  */
// let myName = 'tom'
// console.log(`My name is ${myNane}`);
// console.log(`My name is ${myName.toStrng()}`);
// console.log(`My name is ${myName}`);
