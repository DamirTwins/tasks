/*1) Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»*/

function hello (){
   return 'Привет, JavaScript!';
}
console.log(hello());

/*2) Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/

let cub = function (x) {
   return x * x * x
}
console.log(cub(5))

/*3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/

let name;
console.log(typeof(name = 'Василий'));
function getName(){
   if (typeof('Василий') !== 'undefined'){
      document.write('Привет ' + name);
   }
   else document.write('Привет, гость');
}
getName();

/*
4) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

function getName(n) {
   const ask = [];
   for(let i = 0; n.length > i; i++){
      ask.push(n[i]*2)
      return ask
   }
}
console.log(getName([1,2,3]))
console.log(getName([4,1,1,1,4]))
console.log(getName([2,2,2,2,2]))
