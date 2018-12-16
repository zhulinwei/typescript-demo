// 接口：对类部分行为的抽象，如果在多个类中我们发现他们的一些共有的特性，这个时候就可以把特性提取成接口
var Dog1 = /** @class */ (function () {
    function Dog1() {
    }
    Dog1.prototype.eat = function () { };
    ;
    Dog1.prototype.move = function () { };
    ;
    return Dog1;
}());
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.eat = function () { };
    ;
    Person1.prototype.move = function () { };
    ;
    return Person1;
}());
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.eat = function () { };
    ;
    Person2.prototype.move = function () { };
    ;
    return Person2;
}());
// 接口也可以继承类
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    return Person3;
}());
var person4 = { age: 22, name: 'Level.Z', isGraduation: true };
var person5 = function (age, name) {
    return true;
};
