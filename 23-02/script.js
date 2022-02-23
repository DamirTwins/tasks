/*1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/
let userSalaries = {
    Ella: 100,
    Sophia: 200,
    Ellie: 300,
}
alert(`${userSalaries.Ella} ${userSalaries.Sophia}`);

/* 2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.*/

let sum = {
    a: 5,
    b: 6,
    c: 10,
}
console.log(sum.a + sum.b +sum.c);

/* 3) let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора.*/

let data; //false
let number;
if(data == true){
    number = 3;
} else{
    number = 5;
}

console.log(number);

number = data === true ? 3 : 5;
console.log(number);

/* 4) Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».

Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».*/

name = prompt('Кто такой В.В.ПУТИН?')
if(name === 'Президент'){
    alert('Верно');
}
else{
    alert('Не знаете?')
}









