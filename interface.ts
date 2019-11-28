/*
  接口作用：面向对象编程中，接口是一种规范的定义
*/

// 使用接口定义对象的类型 
// 对行为的抽象
// interface Person {
//   name: string,
//   age: number
// }
// 赋值时 变量的形状必须和接口的形状保持一致
// let tom: Person = {
//   name: 'tom',
//   age: 23
// }

// console.log(tom);

// 可选属性
interface Person1 {
  name: string,
  age?: number
}
let tom1: Person1  = {
  name: 'tom1',
  // age: 34
}
console.log(tom1);

// 任意属性
interface Person2 {
  name: string,
  age?: number,
  [propName: string]: any  // 一个接口允许有任意的属性
}

let tom2: Person2 = {
  name: 'tom2',
  sex: 'male',
  sdf: 'sdf'
}
console.log(tom2);

// 任意属性值允许时string，但是可选属性age的值时number
interface Person3 {
  name: string,
  //age?: number,  Property 'age' of type 'number | undefined' is not assignable to string index type 'string'
  [propName: string]: string
}

// 只读属性
interface Person4 {
  readonly id: number,
  name: string,
  age?: number,
  [propName: string]: any 
}

let tom4: Person4 = {
  id : 123,
  name: 'tom4',
  sex: 'male'
}
// tom4.id = 90 Cannot assign to 'id' because it is a read-only property
console.log(tom4);

// 接口 行为和动作的规范，对批量方法进行约束
interface FullName{
  firstName: string
  secondName: string
}
function printName (name: FullName) {
  // 必须传入对象 firstName secondName
  console.log(name.firstName + '--' + name.secondName);
}
let obj = {
  age: 12,
  firstName: 'zhang',
  secondName: 'san'
}
// 如果直接调用对象 必须为firstName和secondName 不能传其他属性
printName(obj)

/**
 * $.ajax({
 *  type: 'get',
 *  url: 'test.json',
 *  dataType: 'json'
 * })
 */
interface Config {
  type: string
  url: string
  data?: string
  dataType: string
}
// 原声js封装ajax
function ajax(config: Config) {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('成功');
      if (config.dataType === 'json') {
        JSON.parse(xhr.responseText)
      } else {
        console.log(xhr.responseText);
      }
    }
  }
}
ajax({
  type: 'get',
  data: 'name?zhangsan',
  url: 'http://www.baidu.com',
  dataType: 'json'
})

// 函数类型接口：对方法传入的参数 以及返回值进行约束
// 加密的函数类型接口
interface encrypt {
  (key: string, value: string):string
}
let md5:encrypt = function(key:string, value:string): string {
  return key + value
}
console.log(md5('name', 'zhangsan'));

// 类类型接口 对类的约束 和抽象类有点相似
// interface Animals {
//   name: string
//   eat(str: string): void
// }
// class Dogg implements Animals {
//   name: string
//   constructor(name:string) {
//     this.name = name
//   }
//   eat (food: string) {
//     console.log(`${this.name}吃${food}`);
//   }
// }
// let dogg = new Dogg('xiaohu')
// dogg.eat('rou')

// 接口的扩展 接口可以继承接口
interface Animals {
  eat(): void
}
interface Person extends Animals {
  work(): void
}
class Programmer {
  name: string
  constructor(name: string) {
    this.name = name
  }

  coding (code: string) {
    console.log(`${this.name}在搞${code}`);
  }
}
class Web extends Programmer implements Person {
  constructor(name: string) {
    super(name)
  }
  eat () {
    console.log(`${this.name}吃馒头`);
  }
  work () {
    console.log(`${this.name}写代码`);
  }
}
let w = new Web('xiaoku')
w.work()
w.coding('ts程序')