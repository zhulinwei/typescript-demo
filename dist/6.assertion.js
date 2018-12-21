"use strict";
// 类型断言可以手动指定一个值的类型
// 用法1：值 as 类型
// 用户2：<类型>值
function getAge1(age) {
    if (age)
        return age;
    if (age)
        return Number(age);
}
getAge1(22);
getAge1('22');
function getAge2(age) {
    if (age)
        return age;
    if (age)
        return Number(age);
}
getAge2(22);
getAge2('22');
// 总结：给编译器检查用的，翻译成js感觉没太大的用处
