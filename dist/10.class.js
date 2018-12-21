"use strict";
// 面向对象三大特性：封装、继承、多态
// 1.封装：将数据的操作细节隐藏起来，只对外暴露接口（目的是为了防止外界任意更改对象内部的数据）
// 2.继承：子类继承父类以获取父类的全部特性
// 3.多态：同一个行为具有不同的表现形式（接口的多种不同实现方式）
Object.defineProperty(exports, "__esModule", { value: true });
// 类的基本概念
// 类：定义了某个事物的抽象特点
// 对象：类的实例，通过new生成
// 存取器：用以改变属性的读取和赋值行为
// 修饰符：关键字，限定成员或类型的性质
// 抽象类：供给其他类继承的基类，不允许被实例化，抽象类中的方法会在子类中被实现
// 接口：将不同类之间的公有属性或算法封装起来，接口也可以被类实现
// 修饰符：
// 1.publish：公有修饰符，默认所有的类都是公有的
// 2.private：私有修饰符，不能被外部或子类使用
// 3.protected：保护成员修饰符，不能被外部使用，但是能被子类继承
class Animal1 {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
class Person1 extends Animal1 {
    constructor(age, name) {
        super(age, name);
        console.log(this.name);
    }
}
// 抽象类，用于定义属性与方法，不允许被实例化
// 抽象类中的抽象方法必须被子类实现
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Person2 extends Animal2 {
    // 如果Person2没有实现sayHi函数，将会报错
    sayHi() { }
}
