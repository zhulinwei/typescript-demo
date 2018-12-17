// 重载：允许一个函数接受不同的数量或类型的参数时，作出不同的处理

// 比如现在有一个任务是负责反转数字或字符串，我们可以这样实现
function reverse1(value: number | string): number | string {
  if (typeof value == 'number') return Number(value.toString().split('').reverse().join());
  if (typeof value == 'string') return value.split('').reverse().join('');
}

// 上述函数虽然能满足业务需求，但是存在这个一个缺点：描述不清，这个时候我们就可以使用重载来定义多个reverse的函数类型

function reverse2(value: number): number;
function reverse2(value: string): string;
function reverse2(value: number | string): number | string {
  if (typeof value == 'number') return Number(value.toString().split('').reverse().join());
  if (typeof value == 'string') return value.split('').reverse().join('');
}
