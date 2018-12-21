"use strict";
// 数组中值类型为number，不允许出现其他类型
let array1 = [1, 2, 3, 4, 5];
// 数组中值类型为string，不允许出现其他类型
let array2 = ['1', '2', '3', '4', '5'];
// 数组泛型
let array3 = [1, 2, 3, 4, 5];
let array4 = [1, 2, 3, 4, 5];
// 更多情况下是使用any表示数组中可以出现任意类型
let array5 = [1, '1', { age: 22, name: 'Level.Z' }];
