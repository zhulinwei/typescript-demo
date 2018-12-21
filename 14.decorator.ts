// 在了解装饰器之前我们先来看一段代码

class User1 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  changeName(name: string) {
    this.name = name;
  }
}

// 我们现在希望新增一个函数在对name修改之前先对name进行校验，判断如果按照过去的做法，我们可能需要破坏changeName函数以满足需求
class User2 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  validateName(name: string) {
    if (!name) throw new Error('name is invalid');
  }

  changeName(name: string) {
    this.validateName(name);
    this.name = name;
  }
}

// 缺点：新增函数validateName入侵到了changeName的逻辑中，破坏了开闭原则
// 改进方案：装饰器


// 在此处target为User3，propertyKey为changeName，descriptor里装着函数changeName的描述
function validateName(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // 我们重写changeName方法
  let method = descriptor.value;
  descriptor.value = function (name: string) {
    if (name) method.call(this, name);
    else throw new Error('name is invalid');
  }
}

class User3 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  @validateName
  changeName(name: string) {
    this.name = name;
  }
}

let user3 = new User3(3, 'Level.Z');
// user3.changeName('')

// 总结：这里我们可以看到，changeName的逻辑没有任何改变，但其实它的行为已经通过装饰器@validateName得到增强


// 装饰器在TypeScript中有4中装饰形式，注意：装饰器能装饰在类、方法、属性和参数上，但不能只装饰在函数上

// 类装饰器
function sealed(constructor: Function) {
  // 封闭对象，阻止添加新属性并将现有属性标记为不可配置
  Object.seal(constructor);
  Object.seal(constructor.prototype);
} 

@sealed
class User4 {}

// 方法装饰器
// 开篇我们讲解的validateName就是方法装饰器，下面我们换种方式，用装饰器工厂来讲解一下方法装饰器

// 装饰器工厂
function Factory(name: string) {
  console.log('Factory:', name);

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // DoSomething
  }
}

class User5 {

  @Factory('user5_1')
  getAge() {};

  @Factory('user5_2')
  getName() {};
}

let user5 = new User5();
user5.getAge();
user5.getName();

// 这里需要注意的是普通装饰器和装饰器工程的区别，普通装饰器只需要函数名称即可

// 属性装饰器
function name(target: any, propertyKey: string) {}

class User6 {
  @name
  name: string;
}

// 参数装饰器，参数装饰器表达式会在运行时当做函数被调用
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class User7 {
  private name: string;
  setName(@required name: string) {
    this.name = name;
  }
}

let user7 = new User7();
user7.setName('Level.Z');

export {};
