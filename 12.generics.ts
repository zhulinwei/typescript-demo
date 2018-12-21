// 泛型是指在定义函数、接口或类时，不预先指定具体的类型，而是在指定的时候再指定类型的一种特性

// 假设存在函数，其任务是负责输出传入值，我们可以这样写：
function task1(value: any): any {
  return value;
}

task1(22);
task1('Level.Z');
// 这个办法虽然可以通过检查，但是它的问题在于task1函数内部失去了类型检查
// 方案一：多个task
function task2(value: number): number {
  return value; 
}
function task3(value: string): string {
  return value; 
}
// 方案二：重载
function task4(value: string): string;
function task4(value: number): number;
function task4(value: any): any {
  // 实现一样没有严格的类型检查
}

// 这个时候，就应该到泛型登场了
function task5<T>(value: T): T {
  return value;
}
task5<number>(22);
task5<string>('Level.Z');

// T代表任意输入的类型，在后面的输入value: T和输出T中即可使用
// 当然我们也可以不手动指定类型，而是让类型推论自动推算出来

task5(22);
task5('Level.Z');

// 多个类型参数，定义泛型时可以定义多个类型参数
function task6<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}

task6(22, 'Level.Z');

// 泛型约束，在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意地操作它的属性或者方法
function task7<T>(value: T) {
  // 当我们试图打印value的长度时，编译会报错，因为泛型T不一定会包含属性length
  // console.log(value.length);
  return value;
}

// 我们队泛型进行约束，只允许这个函数传入那些包含length属性的变量
interface Value1 {
  length: number;
}

function task8<T extends Value1>(value: T): T {
  console.log(value.length);
  return value;
}

// 因为我们使用了extends约束了T必须符合接口Value的形状，也就是必须包含length属性，因为我们传入number类型时编译会报错
// 编译报错
// task8(22);
// 编译正常
task8('Level.Z');

// 当然我们也可以这样
function task9<T>(value: T[]): T[] {
  console.log(value.length);
  return value;
}

// 或者
function task10<T>(value: Array<T>): Array<T> {
  console.log(value.length);
  return value;
}

// 泛型接口
interface Value2 {
  <T>(value: T): T;
}

let task11: Value2 = function<T>(value: T): T {
  return value;
}

task11(22);
task11('Level.Z');

// 或者
interface Value3<T> {
  (value: T): T;
}

let task12: Value3<number> = function<T>(value: T): T {
  return value;
}
task12(12);

let task13: Value3<string> = function<T>(value: T): T {
  return value;
}
task13('Level.Z');

// 泛型类
class Person1<T> {
  age: T;
  getAge: (age: T) => T;
}

let person1 = new Person1<number>();
person1.age = 22;
person1.getAge = function(age) { return age };

// 泛型默认值，当使用泛型而没有在代码中直接指定类型参数且从实际值参数中也无法推测出时，编译器会采用这个默认的类型
function task14<T = number>(value: T): T {
  return value;
}
task14(22);
task14('Level.Z');
task14<string>('Level.Z');

export {};
