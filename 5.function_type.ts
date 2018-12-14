// 函数有输入和输出，我们都需要对其中进行约束，

// 函数声明，注意输入多余或者少于要求的参数，都是不被允许的
function sum1(x: number, y: number): number {
  return x + y;
}
sum1(1, 2);
// 以下写法将会报错
// sum(1);
// sum(1, 2, 3);

// 函数表达式，=>不是es6的箭头函数，它表示左边是输入类型，右边是输出类型
let sum2: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

sum2(1, 2);

// 接口定义函数类型
interface fn {
  (source: string, target: string): boolean;
}

let sum3: fn = function(source: string, target: string) {
  return source.search(target) >= 0;
}
sum3('name123', 'name');

// 可选参数：我们希望传入部分参数，但是需要注意的是可选参数必须放在最后
function sum4(x: number, y?: number) {
  return y ? x + y : x;
}
sum4(1);
sum4(1, 2);

// 参数默认值
function sum5(x: number = 1, y: number = 2) {
  return x + y;
}
sum5();

// 剩余参数
function sum6(...items: any) {
  return items.reduce((result: any[], current:any) => {
    result.push(current);
  }, []);
}

sum6(1,2,3,4,5);

// 重载，重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 前两次是定义，最后一次是函数实现
function sum7(x: number): number;
function sum7(x: number, y: number): number;
function sum7(x: number, y?: number) {
  if (y) return x + y;
  return x;
}
sum7(1);
sum7(1, 2);
