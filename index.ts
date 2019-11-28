console.log('Nihao -tes')

let str:string = '你好'

// boolean
let flag:boolean = true
flag = false
console.log(flag)

// number
let num:number = 123
num = 456
console.log(num);

//string
let str1:string = 'str'
str = 'asd'
console.log(str);

// array
let arr:number[] = [1,23,4]
let arr1:Array<number> = [1,23,4] //数组泛型
console.log(arr);
console.log(arr1);

// 接口定义数组
interface NumberArray {
  [index: number] : number
}
let fibonacci: NumberArray = [1,1,2,3,5]
let list:any[] = [1,'sdfs', {sfsf:'sdsd'}]

// tuple 属于数组的一种
let arr2:[number, string] = [1, 's']
console.log(arr2);

// enum 
enum Flag {
  success = 1, error = 2
}
let s:Flag = Flag.success
console.log(s);

enum Color {
  red, yellow, blue
}
let c:Color = Color.blue
console.log(c);

enum Err {
  'undefined' = -1, 'null' = -2, 'success' = 1 
}
let e:Err = Err.null
console.log(e);

// any任意类型 赋值后可改变类型
let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7
console.log(myFavoriteNumber);
let anyThing: any = 'hello'
console.log(anyThing);
console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// anyThing.setName('tom')
// 声明时未指定类型的变量，会被识别为任意值类型
let something;
something = 'seven'
something = 7
// any用处
let oBox:any = document.getElementById('box')
oBox.style.color = 'red'

// void空值 用于定义方法时没有返回值
function alertName(): void {
	alert('Tom')
}
alertName()
// null 和undefined
let u:undefined = undefined
let n:null = null

// 联合类型
let unite:string | number = 'seven'
console.log(unite.length);
unite = 7
let num1:number | undefined
// num1 = 1
console.log(num1);
// console.log(unite.length); 报错
// 不确定联合类型变量到底是哪个类型时，只能访问此联合类型所有类型共有的属性和方法
function getString(something: string | number): string {
  return something.toString()
  // return something.length
}
