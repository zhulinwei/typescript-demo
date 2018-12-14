
// 类型别名是给类型起个新名字，通常用在创建联合类型
type input1 = string;
type input2 = number;
type input = input1 | input2;
type output = input1 | input2 | boolean;

function getAge(age: input): output {
  return age;
}

getAge(22);
getAge('22');
