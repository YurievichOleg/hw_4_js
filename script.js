// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log('Это ноль');
    } else if (i % 2 === 0) {
        console.log(`${i} - Это четное число`);
    } else {
        console.log(`${i} - Это нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
let num1 = 4;
let num2 = 5;
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== num1 && arr1[i] !== num2) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);

const arr1_1 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1_1.length; i++) {
    (arr1_1[i] === num1 || arr1_1[i] === num2) ? arr1_1.splice(i, 1) & i-- : arr1_1;
}
console.log(arr1_1);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const array = [];

for (let i = 0; i < 5; i++) {
    array.push(getRandomInt(10));
}

let sum = 0;
let max = array[0];
let count = 0;

for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    (max < array[i]) ? max = array[i] : max;
    (array[i] === 3) ? count++ : count;
}

let reply = false;
(count > 0) ? reply = true : reply = false;

console.log(`массив:${array} 
    Сумма равна: ${sum} 
    Максимум ${max}
    Есть ли число 3 в массиве: ${reply}`);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

for (let i = 0; i < 20; i++) {
    let str = 'x';
    for (let j = 0; j < i; j++) {
        str = str + 'x';
    }
    console.log(str);
}