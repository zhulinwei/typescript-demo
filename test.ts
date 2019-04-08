
// function validateName(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   let method = descriptor.value;
//   descriptor.value = function (name: string) {
//     if (name) method.call(this, name);
//     else throw new Error('name is invalid');
//   }
// }
// 
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @validateName
//   changeName(name: string) {
//     this.name = name;
//   }
// }
// const tony = new Person('tony')
// tony.changeName('zhulinwei')
// console.log(tony)
// 

// class Person<T> {
//   age: T;
//   getAge: (age: T) => T;
// }
// 
// let tony = new Person<number>();
// tony.age = 18;
// tony.getAge = function(age) { return age };

class Animal {
  private type: string;
  protected name: string;
  public constructor(name: string) {
    this.name = name;
    this.type = 'animal';
  }
}
class Person extends Animal {
  public constructor (name: string) {
    super(name)
  }

  talk () {
    console.log(this.name + 'tony')
  }
}
const tony = new Person('tony');
tony.talk()
