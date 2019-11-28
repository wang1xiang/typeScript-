"use strict";
// 定义类
// class Person {
//   name: string; 
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
//   constructor (name: string) {
//     this.name = name
//   }
//   run():void{
//     alert(this.name)
//   }
// }
// let p = new Person('zhangsan')
// p.run()
// class Person {
//   name: string; 
//   constructor (name: string) {
//     this.name = name
//   }
//   getName(): string {
//     return this.name
//   }
//   setName(name:string) :void {
//     this.name = name
//   }
// }
// let p = new Person('zhangsan')
// console.log(p.getName());
// p.setName('lisi')
// console.log(p.getName());
// ts中实现继承 extends、super
// class Person{
//   name: string;
//   constructor(name: string) {
//     this.name = name
//   }
//   run(): string{
//     return `${this.name}在运动`
//   }
// }
// class Web extends Person {
//   constructor(name: string) {
//     super(name) // 初始化父类的构造函数
//   }
//   work() {
//     alert(`${this.name}在gongzuo`)
//   }
// }
// let w = new Web('里斯')
// console.log(w.work());
// 类里面的修饰符 typescript里面定义属性的时候提供三种修饰符
/*
  public 公有
  protected 保护 类里面 子类可以访问 类外不能访问
  private
*/
// 在类外部访问共有属性
// class Person{
//   public name: string;  // 公有属性
//   constructor(name: string) {
//     this.name = name
//   }
//   run(): string{
//     return `${this.name}在运动`
//   }
// }
// let p = new Person('ssss')
// alert(p.name)
// 在当前类和子类访问
// class Person{
//     protected name:string;  /*公有属性*/
//     constructor(name:string){
//       this.name=name;
//     }
//     run():string{
//       return `${this.name}在运动`
//     }
// }
// var p=new Person('王五');
// alert(p.run())
// class Web extends Person{
//     constructor(name:string){
//       super(name);  /*初始化父类的构造函数*/
//     }                  
//     work(){
//       alert(`${this.name}在工作`)
//     }
// }
// var w=new Web('李四11');
// w.work();
// w.name 属性“name”受保护，只能在类“Person”及其子类中访问。
// alert( w.run());
// private 私有
// class Person{
//   private name:string;  /*公有属性*/
//   constructor(name:string){
//     this.name=name;
//   }
//   run():string{
//     return `${this.name}在运动`
//   }
// }
// var p=new Person('王五');
// alert(p.run())
// class Web extends Person{
//   constructor(name:string){
//     super(name);  /*初始化父类的构造函数*/
//   }                  
//   work(){
//     // alert(`${this.name}在工作`)
//   }
// }
// var w=new Web('李四11');
// w.work();
// alert( w.run());
// 静态方法 静态属性
// class Person {
//   name: string
//   static age: number = 12
//   constructor(name: string) {
//     this.name = name
//   }
//   run () {
//     alert(`${this.name}在运动`)
//   }
//   static work () { // static命名的为静态方法 里面无法直接调用类里面的属性 改为静态属性
//     alert(`${this.age}岁了还不工作`)
//   }
// }
// let p = new Person('sd')
// p.run
// Person.work()
// 多态 父类定义一哥方法不去实现 让继承他的子类去实现
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat () {
//     console.log('吃的方法');
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + '吃肉'
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat () {
//     return this.name + '吃老鼠'
//   }
// }
// 抽象方法 抽象类 abstract抽象方法只能放抽象类当中 子类必须包含父类abstract中的方法
// 抽象类不能直接被实例化
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + "\u5728\u8DD1";
    };
    return Animal;
}());
// let a = new Animal() 无法创建抽象类的实例
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5403\u8089");
    };
    return Dog;
}(Animal));
var dog = new Dog('小虎');
dog.eat();
