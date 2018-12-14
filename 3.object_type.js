// 定义变量的属性必须与接口一致，不能多也不能少
var person1 = {
    age: 22,
    name: 'Level.Z'
};
var person2 = {
    age: 22
};
var person3 = {
    name: 'Level.Z'
};
var person4 = {
    age: 22,
    name: 'Level.Z'
};
;
var person5 = {
    age: 22,
    name: 'Level.Z'
};
// 错误做法：
// person5.age = 22;
// person5.name = 'Level.Z';
