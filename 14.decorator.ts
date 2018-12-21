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

function validateName(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('target:', target);
  console.log('propertyKey:', propertyKey);
  console.log('PropertyDescriptor:', descriptor);
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
user3.changeName('a')
