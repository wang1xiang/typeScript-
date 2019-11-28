// 类型别名是给类型起个别名
type Name = string
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  // do
}

// handleEvent(document.getElementById('hello'), 'scroll')
// handleEvent(document.getElementById('world'), 'dbclick')
// type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种

// 元祖 tuple合并不同类型的对象， 数组合并相同类型的对象
let xcatliu: [string, number] = ['Xcat liu', 34]
// 枚举 用于取值被限定在一定范围内的场景， 比如一周七天、 颜色定为7种
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(Days[0] === 'Sun')
console.log(Days['Mon'] === 1)
// 常数枚举使用const enum定义的枚举类型 与普通枚举的却别 会在编译阶段被删除，并且不包含计算成员
const enum Directions {
  Up, Down, Left, Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// 外部枚举 是使用declare enum定义的枚举类型
declare enum Directions1 {
  Up, Down, Left, Right
}
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
abstract class Work {
  public name: string;
  public constructor(name:string) {
    this.name = name
  }
  public abstract sayHi():string;
}

// let a = new Work('it') 无法创建抽象类的实例
class IT extends Work {
  public sayHi():string {
    return this.name
  }
}
let it = new IT('it')

// 类是面向对象的重要概念，一个类只能继承另一个类
interface Alarm {
  alert(): void
}
class Door {}
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert');
  }
}

// 一个类可以实现多个接口
interface Light {
  lightOn(): void
  lightOff(): void
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('car light on');
  }
  lightOff() {
    console.log('car light iff');
  }
}

// 接口与接口是继承关系
interface LightAlarm extends Alarm {
  lightOn():void
  lightOff():void
}
// 接口继承类
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

interface Point3d extends Point {
  z: number
}
let point: Point3d = {x:1, y:2, z:3}

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