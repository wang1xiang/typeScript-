// 内置对象 是指全局作呕能够与Global上存在的对象
// es标准提供的内置对象：Boolean、Error、Date、RegExp等
let b: Boolean = new Boolean(1)
let err: Error = new Error('error occurred')
let d: Date = new Date()
let r: RegExp = /[a-z]/
// BOM和DOM提供的内置对象:Document、HTMLElement、Event、NodeList
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
