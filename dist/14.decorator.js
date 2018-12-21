"use strict";
// 在了解装饰器之前我们先来看一段代码
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function validateName(target, propertyKey, descriptor) {
    console.log('target:', target);
    console.log('propertyKey:', propertyKey);
    console.log('PropertyDescriptor:', descriptor);
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
user3.changeName('a');
