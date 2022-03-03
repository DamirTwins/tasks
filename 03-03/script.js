/*1) Выводим  2 следующих сообщения после соответствующих задержек.

    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

    В решении нужно определить всего одну функцию, содержащую встроенные функции.
    Это означает, что множество вызовов setTimeout должны будут использовать
одну и ту же функцию.

    Пример вызова:

    setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds*/

function hello(b){
    alert(b)
}

setTimeout(hello, 4000, 'Hello after 4 seconds');
setTimeout(hello, 8000, 'Hello after 8 seconds');


/*2) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
произведение этих аргументов.*/

function fn(n,m){
    return n * m;
}

console.log(fn(4,5));


/*
3) Создайте функцию и с помощью цикла найдите факториал числа 7:
Название для функции можно дать любую.
    Например при вызове функции factorial с параметром 7 в консоли должно
вывести следующее:

    factorial(7); //1*2*3*4*5*6*7 //5040*/

function fact (a){
    let res = 1; {
        for(i = 1; i <= a; i++){
        res *= i;
    }
    return res;
}}

let result = fact (7);
console.log(result);