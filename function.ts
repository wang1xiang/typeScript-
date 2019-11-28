// 函数定义
// 函数声明式
function run(): string {
  return 'run'
}
// 匿名函数
var fun = function():number {
  return 234
}
alert(fun())

// ts定义方法传参
function getInfo(name: string, age: number): string {
  return `${name}---${age}`
}
alert(getInfo('zhangsan', 12))

// 可选参数 必须配置到参数最后面
// ts中参数实参和形参必须一样，如果不一样需要配置可选参数
function getInfo1(name: string, age?: number): string {
  return `${name}---${age}`
}
alert(getInfo1('zhangsan'))

// 默认参数
// es6和ts都可以设置默认参数
function getInfo2(name: string, age: number=20): string {
  return `${name}---${age}`
}
alert(getInfo2('zhangsan'))
alert(getInfo2('zhangsan', 30))

// 剩余参数 三点运算符接收形参传过来的值
function sum(a:number, ...result:number[]): number {
  let sum = 0
  for (var i = 0; i< result.length; i++) {
    sum += result[i]
  }
  return sum
}
alert(sum(1,2,3,4,5,6))

// 函数重载 通过为同一个函数提供多个函数类型定义来试下多种功能的目的
// ts为了兼容es5和es6 重载的写法和java有区别
function getInfo3(name: string): string
function getInfo3(name: string, age: number): number
function getInfo3(name: any, age?: any): any {
  if (age) {
    return `我叫：${name}，我的年龄是：${age}`
  } else {
    return `我叫：${name}`
  }
}

alert(getInfo3('zhangsan'))
alert(getInfo3('zhangsan', 20))

// 联合类型
function reserve(x: number): number
function reserve(x: string): string
function reserve(x: number | string): number | string |undefined {
  if (typeof x === 'string') {
    return x.split('').reverse().join('')
  } else if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }
}

reserve('12334')

// 断言
// 类型断言 需要断言的变量前加上<Type>即可
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}
// 类型断言 不是类型转换
// function toBoolean(something: string | number): boolean {
//   return <boolean>something
// }