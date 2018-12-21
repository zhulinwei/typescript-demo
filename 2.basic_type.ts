// number 类型
let age1: number = 22;
let age2: number = 0x2;
// let age3: number = 0101;
let age4: number = NaN;
let age5: number = Infinity;

// string 类型，注意：name是关键字，不能直接在ts文件中定义
let name1: string = 'Level.Z';
let name2: string = `${name1}`;

// boolean 类型
let isGraduation: boolean = true;

// null 和 undefined类型，意义不大
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// void 类型，用处不大，只能复制为null和undefined类型
// let void1: void = null;
let void2: void = undefined;

// any 类型，任意值，如果变量在声明的时候未指定类型，则默认为any类型，也不会被类型检查
let any1: any = 22;
let any2: any = true;
let any3: any = 'Level.Z';

// 联合类型
let union1: string | number = 22;
let union2: string | number = 'Level.Z';

let date1: Date = new Date();
let date2: Date = new Date();

