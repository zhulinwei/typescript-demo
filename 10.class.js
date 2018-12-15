// 面向对象三大特性：封装、继承、多态
// 1.封装：将数据的操作细节隐藏起来，只对外暴露接口（目的是为了防止外界任意更改对象内部的数据）
// 2.继承：子类继承父类以获取父类的全部特性
// 3.多态：同一个行为具有不同的表现形式（接口的多种不同实现方式）
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
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Person1;
}(Animal1));
// 抽象类，用于定义属性与方法，不允许被实例化
// 抽象类中的抽象方法必须被子类实现
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 如果Person2没有实现sayHi函数，将会报错
    Person2.prototype.sayHi = function () { };
    return Person2;
}(Animal2));
