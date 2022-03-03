/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/

let number = [2,3,4,5,6,7];
let sum = 1;
for(i=0; i < number.length; i++){
    sum *= number[i]
}
let obj = {result:sum};

console.log(sum);
console.log(obj);

/*
2) Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/


/*
3) Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/

const myReverse = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

const data = [1,2,3];
myReverse(data);

const myReverse2 = (arr) => {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

const data2 = [1,2,3];
let result = myReverse2(data);
console.log(result);















