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

/* Задание 2 */
console.log('Задание 2, Прямоугольник');
const a = 17;		// Сторона a
const b = 13;		// Сторона b
let ar, per;		// Площадь и периметр
console.log(`a = ${a}, b = ${b}`);
console.log(`Площадь = ${a * b}`);
console.log(`Периметр = ${(a + b) * 2}`);
console.log(`Отношение площади к периметру = ${a * b / ((a + b) * 2)}`);
console.log('\n')