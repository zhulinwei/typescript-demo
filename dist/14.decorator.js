"use strict";
// 在了解装饰器之前我们先来看一段代码
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
class User1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    changeName(name) {
        this.name = name;
    }
}
// 我们现在希望新增一个函数在对name修改之前先对name进行校验，判断如果按照过去的做法，我们可能需要破坏changeName函数以满足需求
class User2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    validateName(name) {
        if (!name)
            throw new Error('name is invalid');
    }
    changeName(name) {
        this.validateName(name);
        this.name = name;
    }
}
// 缺点：新增函数validateName入侵到了changeName的逻辑中，破坏了开闭原则
// 改进方案：装饰器
// 在此处target为User3，propertyKey为changeName，descriptor里装着函数changeName的描述
function validateName(target, propertyKey, descriptor) {
    // 我们重写changeName方法
    let method = descriptor.value;
    descriptor.value = function (name) {
        if (name)
            method.call(this, name);
        else
            throw new Error('name is invalid');
    };
}
class User3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    changeName(name) {
        this.name = name;
    }
}
__decorate([
    validateName
], User3.prototype, "changeName", null);
let user3 = new User3(3, 'Level.Z');
// user3.changeName('')
// 总结：这里我们可以看到，changeName的逻辑没有任何改变，但其实它的行为已经通过装饰器@validateName得到增强
// 装饰器在TypeScript中有4中装饰形式，注意：装饰器能装饰在类、方法、属性和参数上，但不能只装饰在函数上
// 类装饰器
function sealed(constructor) {
    // 封闭对象，阻止添加新属性并将现有属性标记为不可配置
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let User4 = class User4 {
};
User4 = __decorate([
    sealed
], User4);
// 方法装饰器
// 开篇我们讲解的validateName就是方法装饰器，下面我们换种方式，用装饰器工厂来讲解一下方法装饰器
// 装饰器工厂
function Factory(name) {
    console.log('Factory:', name);
    return function (target, propertyKey, descriptor) {
        // DoSomething
    };
}
class User5 {
    getAge() { }
    ;
    getName() { }
    ;
}
__decorate([
    Factory('user5_1')
], User5.prototype, "getAge", null);
__decorate([
    Factory('user5_2')
], User5.prototype, "getName", null);
let user5 = new User5();
user5.getAge();
user5.getName();
// 这里需要注意的是普通装饰器和装饰器工程的区别，普通装饰器只需要函数名称即可
// 属性装饰器
function name(target, propertyKey) { }
class User6 {
}
__decorate([
    name
], User6.prototype, "name", void 0);
// 参数装饰器，参数装饰器表达式会在运行时当做函数被调用
function required(target, propertyKey, parameterIndex) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}
class User7 {
    setName(name) {
        this.name = name;
    }
}
__decorate([
    __param(0, required)
], User7.prototype, "setName", null);
let user7 = new User7();
user7.setName('Level.Z');
