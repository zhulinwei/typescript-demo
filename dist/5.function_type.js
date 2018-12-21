"use strict";
// 函数有输入和输出，我们都需要对其中进行约束，
// 函数声明，注意输入多余或者少于要求的参数，都是不被允许的
function sum1(x, y) {
    return x + y;
}
sum1(1, 2);
// 以下写法将会报错
// sum(1);
// sum(1, 2, 3);
// 函数表达式，=>不是es6的箭头函数，它表示左边是输入类型，右边是输出类型
// 很多时候我们可能会省略=> number，这样的话代码只对等号右侧的匿名函数进行了类型定义，而等号的作出实际上是通过赋值操作进行类型推论而推断出来的
let sum2 = function (x, y) {
    return x + y;
};
sum2(1, 2);
let sum3 = function (source, target) {
    return source.search(target) >= 0;
};
sum3('name123', 'name');
// 可选参数：我们希望传入部分参数，但是需要注意的是可选参数必须放在最后
function sum4(x, y) {
    return y ? x + y : x;
}
sum4(1);
sum4(1, 2);
// 参数默认值
function sum5(x = 1, y = 2) {
    return x + y;
}
sum5();
// 剩余参数
function sum6(...items) {
    return items.reduce((result, current) => {
        result.push(current);
    }, []);
}
sum6(1, 2, 3, 4, 5);
function sum7(x, y) {
    if (y)
        return x + y;
    return x;
}
sum7(1);
sum7(1, 2);
// TypeScript中重载的实现，是为了静态检查时及时发现错误的调用，顺便明示给其他调用者该函数有不同的调用形式
