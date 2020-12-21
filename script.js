/* Задание 1 */
console.log('Задание 1, Приведение типов данных');
let str = 'string';
let num = 30;
let bool = true;
let prim = null;
str = "строка"
num = 1
bool = true;
prim = null;
console.log(`string "${str}" + number "${num}" = "${str + num}"`); // = string
console.log(`string "${str}" + boolean "${bool}" = "${str + bool}"`); // = string
console.log(`string "${str}" + null "${prim}" = "${str + prim}"`); // = string
console.log(`number "${num}" + boolean "${bool}" = "${num + bool}"`); // = number
console.log(`number "${num}" + null "${prim}" = "${num + prim}"`); // = number
console.log(`boolean "${bool}" + null "${prim}" = "${bool + prim}"`); // = number
console.log('\n')
