"use strict";
// 内置对象 是指全局作呕能够与Global上存在的对象
// es标准提供的内置对象：Boolean、Error、Date、RegExp等
var b = new Boolean(1);
var err = new Error('error occurred');
var d = new Date();
var r = /[a-z]/;
// BOM和DOM提供的内置对象:Document、HTMLElement、Event、NodeList
var body = document.body;
var allDiv = document.querySelectorAll('div');
