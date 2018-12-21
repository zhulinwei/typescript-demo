// 数组合并了相同类型的对象，而元组和行了不同类型的对象
let person1: [number, string] = [22, 'Level.Z'];
person1.push('isGraduation');

// 注意，不允许初始化时只传入部分元素或是发生越界问题，以下做法都是不可行的
// let person2: [number, string] = [22];
// let person3: [number, string] = [true, false];
//
export {}
