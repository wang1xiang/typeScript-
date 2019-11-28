// import { getDa } from "../操作数据库底层库/db";

/*
  装饰器：特殊类型的声明，能够被附加到类声明，方法，属性或参数上，可以修改类的行为
  通俗讲装饰器就是一哥方法，可以注入到类、方法、属性参数上类扩展类、属性、方法和参数的功能
  常见装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
  装饰器的写法：普通装饰器（无法传参)、装饰器工厂（可传参）
  装饰器是过去纪念js最大的成就之一，也是ES7的标准特性之一
*/

// 1.类装饰器：在类声明之前被声明（紧靠这类声明） 类装饰器用于类构造函数，可以用来监视，修改或替换类定义 传入一哥参数

// 1.1装饰器
// function logClass(params: any) {
//   console.log(params); // params就是当前类

//   // 动态扩展属性
//   params.prototype.apiUrl = 'XXXX'
// }

// @logClass
// class HttpClient {
//   constructor() {

//   }
//   getData() {

//   }
// }
// let http = new HttpClient()
// console.log(http.apiUrl);

// 1.2装饰器工厂
// function logClass(params: string) {
//   return function(target: any) {
//     console.log(params);
//     console.log(target);

//     target.prototype.apiUrl = params
//   }
// }

// @logClass('http://www.baidu.com')
// class HttpClient {
//   constructor() {

//   }
//   getData() {

//   }
// }
// let http: any = new HttpClient()
// console.log(http.apiUrl);

// 重载构造函数的例子
// function logClass(target: any) {
//   console.log(target);

//   return class extends target {
//     apiUrl: any = '修改后的apiurl'
//     getData() {
//       this.apiUrl = this.apiUrl + '.....'
//       console.log(this.apiUrl);
//     }
//   }
// }

// @logClass
// class HttpClient {
//   apiUrl: string | undefined
//   constructor() {
//     this.apiUrl = '构造函数中的apiurl'
//   }
//   getData() {
//     console.log(this.apiUrl);
//   }
// }
// let http = new HttpClient()
// http.getData()

/* 
2 属性装饰器
  属性装饰器表达式会在 运行时当作函数被调用，传入下列两个参数：
   1.对于静态成员来说是类的构造函数，对于实际成员是类的原型对象
   2.成员的名字 
*/

// 类装饰器
// function logClass(params: string) {
//   return function(target: any) {
//     console.log(target);
//   }
// }

// //属性装饰器
// function logProperty(params: any) {
//   return function(target: any, attr: any) {
//     console.log(params);
//     console.log(target);
//     console.log(attr);
//     target[attr] = params
//   }
// }
// @logClass('XXX')
// class HttpClient {
//   @logProperty('http://www.baidu.com')
//   apiUrl: string | undefined
//   constructor() {
//   }
//   getData() {
//     console.log(this.apiUrl);
//   }
// }

// let http = new HttpClient()
// http.getData()

/* 
  3.方法装饰器
    它会被应用到方法的属性描述符上，可以用来监视，修改或替换方法定义
    方法修饰会在运行时传入下列3个参数：
      1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
      2.成员名字
      3.成员的属性描述符
*/
// 方法装饰器
// function get(params:any) {
//   return function(target: any, methodsName: any, desc: any) {
//     console.log(target);
//     console.log(methodsName);
//     console.log(desc);

//     target.apiUrl = 'xxx'
//     target.run = function() {
//       console.log('run');
//     }
//   }
// }
// class HttpClient {
//   apiUrl: string | undefined
//   constructor() {
//   }
//   @get('http://www.baidu.com')
//   getData() {
//   }
// }
// let http: any = new HttpClient()
// http.run()

// function get(params:any) {
//   return function(target: any, methodsName: any, desc: any) {
//     console.log(target);
//     console.log(methodsName);
//     console.log(desc.value);

//     // 修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型
//     // 1. 保存当前方法
//     let oMethod = desc.value
//     desc.value = function(...args: any[]) {
//       args = args.map(value => {
//         return String(value)
//       })
//       console.log(args);
//       // oMethod.apply(this, args)
//     }
//   }
// }
// class HttpClient {
//   apiUrl: string | undefined
//   constructor() {
//   }
//   @get('http://www.baidu.com')
//   getData() {
//     console.log('getdata方法');
//   }
// }

// let http = new HttpClient()
// http.getData(123, '213')

// 装饰器执行顺序 属性》方法》方法参数》类 如果有多个同样的装饰器，会先执行后面的
function logClass(params: string) {
  return function (target: any) {
    console.log('类装饰器');
  }
}
function logAttr(params?: string) {
  return function(target: any, attrName: any) {
    console.log('属性装饰器');
  }
}

function logMethos(params?: string) {
  return function(target: any, attrname: any, desc: any) {
    console.log('方法装饰器');
  }
}

@logClass('http')
class HttpClient {
  @logAttr()
  apiUrl: string | undefined
  constructor() {
  }
  @logMethos()
  getData() {
    return true
  }
}