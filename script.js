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

/* Задание 3 */
console.log('Задание 3, Конвертация единиц измерения');
let c = 25;
let f = 87;
console.log(`${c} C\u{00B0} соответствует ${c * 1.8 + 32} F\u{00B0}`);
console.log(`${f} F\u{00B0} соответствует ${(f - 32) / 1.8} C\u{00B0}`);
console.log('\n')

/* Задание 4 */
console.log('Задание 4, Високосный год');
let year;
let vis;
year = prompt("Какой сейчас год?", "")
vis = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? true : false;
console.log(`${year}: ${vis}`)
console.log('\n')

/* Задание 5 */
console.log('Задание 5, Проверка');
let x = prompt('Введите 1-е число:');
let y = prompt('Введите 2-е число:');
res=(x == 10 || y == 10 || x + y == 10) ? true: false;
console.log(`${res}`);


