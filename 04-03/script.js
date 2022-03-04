/*1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.

    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4*/

let btnStart = document.getElementById('start');
let resultBtn = document.getElementById('result');

let result;
let prm;
result = 0;

let function1 = () => {
    prm = prompt('Введите число')
    while(prm != 99){
        result += 1;
        prm = prompt('Введите число');
    }return result

}

btnStart.onclick = function1;

resultBtn.onclick = () =>{
    alert(`колич чисел - ${result}`)
}

/*2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран.

    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let btnSum = document.getElementById('main')
let btnSn = document.getElementById('sc')

let i = 0;
let getSum = () => {
    let sum = 0;
    let pro = prompt('Введите число')
    while(pro != 999){
        sum = sum + Number(pro)
        console.log(sum)
        i++;
        pro = prompt('Введите другое число')
   }
   return alert(sum);
}
btnSum.onclick = getSum;
btnSn.onclick = () => (
    alert(`колич чисел - ${i}`)
);


/*
3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).

ввод: 2006, 2018 ⇒ вывод: вам 12 лет)*/

let date = new Date;
let btnDate = document.getElementById('date')

let getDate = () => {
    let year = prompt('Введите год рождения');
    let fullyear = date.getFullYear() - Number(year)
    return alert(`Тебе ${fullyear}лет`);
}

btnDate.onclick = getDate;












