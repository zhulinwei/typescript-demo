"use strict";
// 接口：对类部分行为的抽象，如果在多个类中我们发现他们的一些共有的特性，这个时候就可以把特性提取成接口
Object.defineProperty(exports, "__esModule", { value: true });
class Dog1 {
    eat() { }
    ;
    move() { }
    ;
}
class Person1 {
    eat() { }
    ;
    move() { }
    ;
}
class Person2 {
    eat() { }
    ;
    move() { }
    ;
}
// 接口也可以继承类
class Person3 {
}
let person4 = { age: 22, name: 'Level.Z', isGraduation: true };
let person5 = function (age, name) {
    return true;
};
