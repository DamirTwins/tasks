/*1) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

function getMass (n) {
    const ask = [];
    for(let i = 0; i < n.length; i++){
        ask.push(n[i]*2)
    }
    return ask
}
console.log(getMass([1,2,3]))
console.log(getMass([4,1,1,1,4]))
console.log(getMass([2,2,2,2,2]))

/*2) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
    И эти найденные четные числа должны быть собраны в одном массиве.*/

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newArr = arr.filter((value) => value % 2 == 0);

console.log(newArr);

/*3) Заполните массив 10-ю иксами с помощью цикла.    [x,x...]*/

let mass = [];
for (i = 0; i < 10; i++){
    mass [i] = 'x'
}
console.log(mass);

/*
4) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
С помощью цикла for и оператора if нужно проверить есть ли в массиве число
со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'*/

let ourArr = [1, 2, 115, 4, 58, 5 ,7 ,99];
for (let i = 0; i < ourArr.length; i++) {
    if (ourArr [i] === 4) {
        console.log('Есть');
}
}