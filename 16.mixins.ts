
class Person1 {
  eat () {
    console.log('eat');
  }
}
class Person2 {
  move () {
    console.log('move');
  }
}
class Tony implements Person1, Person2 {
  eat: () => void;
  move: () => void;
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    })
  });
}
applyMixins(Tony, [Person1, Person2])
new Tony().eat();

export {};
