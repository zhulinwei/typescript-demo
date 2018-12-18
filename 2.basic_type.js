// number 类型
var age1 = 22;
var age2 = 0x2;
// let age3: number = 0101;
var age4 = NaN;
var age5 = Infinity;
// string 类型，注意：name是关键字，不能直接在ts文件中定义
var name1 = 'Level.Z';
var name2 = "" + name1;
// boolean 类型
var isGraduation = true;
// null 和 undefined类型，意义不大
var nullValue = null;
var undefinedValue = undefined;
// void 类型，用处不大，只能复制为null和undefined类型
var void1 = null;
var void2 = undefined;
// any 类型，任意值，如果变量在声明的时候未指定类型，则默认为any类型，也不会被类型检查
var any1 = 22;
var any2 = true;
var any3 = 'Level.Z';
// 联合类型
var union1 = 22;
var union2 = 'Level.Z';
var date1 = new Date();
var date2 = new Date();
