/**
 * @fileOverview  ES6常用知识
 * @author        guangyu jin
 * @date          2018-04-09
 * @directory     解构赋值用途、字符串
 */


/**
 * 解构赋值用途
 */

// 1、交换变量值

let x = 1;
let y = 2;
[x, y] = [y, x]

// 2、函数返回多个值

function example () {
  return [1, 2, 3]; // 返回数组
}
let [a, b, c] = example();

function example () {
  return { // 返回对象
    foo: 1,
    bar: 2
  }
}
let {foo, bar} = example();

// 3、提取JSON数据

let jsonData = {
  id: 1,
  status: 'ok',
  data: [2, 3]
};

let {id, status, data: number} = jsonData;

// 4、输入模板指定方法

import { React } from 'react';

// 5、函数参数的定义

function f ([x, y, z]) { ... } // 有序
f([1, 2, 3]);

function f ({x, y, z}) { ... } // 无序
f({z: 3, y: 2, x: 1});

// 6、函数参数的默认值: 避免了在函数体内部再写var foo = config.foo || 'default foo' 这样的语句。

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  globel = true
} = {}) { ... }

// 7、遍历 Map 结构

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {}
for (let [key] of map) {}
for (let [, value] of map) {}


/**
 * 字符串
 */

// 1、判断是否包含指定字符串
// includes()：返回布尔值，表示是否找到了参数字符串
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

s.startsWith('world', 6) // true 第n个
s.endsWith('Hello', 5) // true 前n个
s.includes('Hello', 6) // false 第n个

// 2、repeat(): 返回一个新字符串，将原字符串重复n次

