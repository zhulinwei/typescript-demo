"use strict";
// number 类型
let age1 = 22;
let age2 = 0x2;
// let age3: number = 0101;
let age4 = NaN;
let age5 = Infinity;
// string 类型，注意：name是关键字，不能直接在ts文件中定义
let name1 = 'Level.Z';
let name2 = `${name1}`;
// boolean 类型
let isGraduation = true;
// null 和 undefined类型，意义不大
let nullValue = null;
let undefinedValue = undefined;
// void 类型，用处不大，只能复制为null和undefined类型
// let void1: void = null;
let void2 = undefined;
// any 类型，任意值，如果变量在声明的时候未指定类型，则默认为any类型，也不会被类型检查
let any1 = 22;
let any2 = true;
let any3 = 'Level.Z';
// 联合类型
let union1 = 22;
let union2 = 'Level.Z';
let date1 = new Date();
let date2 = new Date();
