// 在TypeScript中我们使用接口来定义对象的类型
interface Person1 {
  age: number;
  name: string;
}

// 定义变量的属性必须与接口一致，不能多也不能少
let person1: Person1 = {
  age: 22,
  name: 'Level.Z'
};

// 可选属性，有时我们希望不用完全匹配接口的类型
interface Person2 {
  age?: number;
  name?: string;
}

let person2: Person2 = {
  age: 22
};

let person3: Person2 = {
  name: 'Level.Z'
};

// 任意类型，有时我们不确定对象中有什么类型，所以我们可以设置为任意属性
interface Person3 {
  age: number;
  [propName: string]: any;
}

let person4: Person3 = {
  age: 22,
  name: 'Level.Z'
};

// 注意事项：propName后，接口中其他属性也必须符合propName的要求，如以下的定义是错误的，propName值的类型是string，但age的值为number，不符合要求
// interface Person4 {
//   age: number;
//   [propName: string]: string;
// }

// 只读属性，我们希望部分属性再被陈建华后就不能修改
interface Person5 {
  readonly age: number;
  readonly name: string;
};

let person5: Person5 = {
  age: 22,
  name: 'Level.Z'
};
// 错误做法：
// person5.age = 22;
// person5.name = 'Level.Z';
