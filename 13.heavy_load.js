// 重载：允许一个函数接受不同的数量或类型的参数时，作出不同的处理
// 比如现在有一个任务是负责反转数字或字符串，我们可以这样实现
function reverse1(value) {
    if (typeof value == 'number')
        return Number(value.toString().split('').reverse().join());
    if (typeof value == 'string')
        return value.split('').reverse().join('');
}
function reverse2(value) {
    if (typeof value == 'number')
        return Number(value.toString().split('').reverse().join());
    if (typeof value == 'string')
        return value.split('').reverse().join('');
}
