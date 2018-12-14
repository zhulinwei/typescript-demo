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
var sum2 = function (x, y) {
    return x + y;
};
sum2(1, 2);
var sum3 = function (source, target) {
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
function sum5(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 2; }
    return x + y;
}
sum5();
// 剩余参数
function sum6() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items.reduce(function (result, current) {
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
