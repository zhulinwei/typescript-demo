// 枚举类型用于取值被限定在一定范围内的场景

enum Days1 {
  Sunday,
  MonDay,
  ThusDay,
  WednesDay,
  Thursday,
  Friday,
  Saturday
};

// 枚举成员会被赋值为0开始递增的数字
console.log(Days1["Sunday"] == 0);
console.log(Days1[0] == "Sunday");

// 手动赋值与计算所得项，注意如果计算所得项后是未手动赋值的项，它会因为无法获得初始值而报错
enum Day2 {
  Sunday = 0,
  MonDay,
  ThusDay,
  WednesDay,
  Thursday,
  Friday,
  Saturday = '123456'.length
}

// 常数枚举，常数枚举只能使用常数枚举表达式，不允许使用计算成员，且在编译后会被删除
const enum Day3 {
  Sunday,
  MonDay,
  ThusDay,
  WednesDay,
  Thursday,
  Friday,
  Saturday
}

// 外部枚举, 外部枚举用来描述已经存在的枚举类型的形状，编译后会被删除
declare enum Day4 {
  Sunday,
  MonDay,
  ThusDay,
  WednesDay,
  Thursday,
  Friday,
  Saturday
}

