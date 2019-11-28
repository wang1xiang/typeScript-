declare var temp:'string' // 声明全局变量
declare function func(number: number): void // 声明全局方法
declare class Animal {
  name:string;
  constructor(name: string);
  sayHi(): string
}
let tony = new Animal('tony')
declare enum Flag1 {
  success = 1, error = 2
}
// declare namespace // 声明（含有子属性的）全局变量
declare interface game {
  name: string,
  size: number
}
// 声明变量 ts中编译器不知道$或jQuery是什么 使用declare var来定义他的类型
// $('#box')
// 这里定义全局变量$的类型，用于编译时检查
// declare var $: (selector: string) => any
// $('#box')

// 声明文件 通常把声明文件语句放在单独的文件中(jQuery.d.ts)
$('#box')

// namespace 命名空间
// 早期使用module关键字表示内部模块 es6也使用module关键字 ts为了兼容 使用namespace代替module

// export导出变量
// export const name:string = 's'
// export function getName(): string {return 's'}
// export enum Directions {
//   Up, down, Left, Right
// }
// export interface Options {
//   data: any
// }
declare const name1:string
declare function getName(): string
declare enum Directions {
  Up, down, Left, Right
}
declare interface Options {
  data: any
}
export { name1, getName, Directions, Options }
// export default es6默认导出
// 只有function、class和interface可以直接默认导出，其他需要先声明
export default function foo(): string {return 's'}
// const baizhi:string = 's'
// export default baizhi

// export = commonjs导出模块
