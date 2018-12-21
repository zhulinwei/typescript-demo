// 接口：对类部分行为的抽象，如果在多个类中我们发现他们的一些共有的特性，这个时候就可以把特性提取成接口

// 如人和狗存在进食和运动等行为，这个时候我们就可以将他们的共性提取出来做出一个定义
interface Animal1 {
  eat(): void;
  move(): void; 
}

class Dog1 implements Animal1 {
  eat() {};

  move() {};
}

class Person1 implements Animal1 {
  eat() {};

  move() {};
}

// 一个类可以实现多个接口
interface Animal2 {
  eat(): void;
}

interface Animal3 {
  move(): void;
}

class Person2 implements Animal2, Animal3 {
  eat() {};

  move() {};
}

// 接口之间也可以相互继承
interface Animal4 extends Animal1 {
  talk(): void;
}

// 接口也可以继承类
class Person3 {
  age: number;
  name: string;
}

interface Person4 extends Person3 {
  isGraduation: boolean;
}

let person4: Person4 = { age: 22, name: 'Level.Z', isGraduation: true };

// 混合类型，使用接口来定义函数需要符合的形状
interface Person5 {
  (age: number, name: string): boolean;
}
let person5: Person5 = function (age: number, name: string) {
  return true;
}

export {};
