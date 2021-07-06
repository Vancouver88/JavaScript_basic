"use strict";

/**
 * Функция округления числа до сотых
 *
 * @param {number} quot Число, полученное при делении 2 чисел
 * @return {number} Число, полученное при делении 2 чисел, округленное до сотых
 */
function truncated(quot) {
    return Math.trunc(quot * 100) / 100;
}

/**
 *Функция математических операций с двумя числами
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return arg1 + arg2;
            break;
        case "minus":
            return arg1 - arg2;
            break;
        case "mult":
            return arg1 * arg2;
            break;
        case "quot":
            let quot = arg1 / arg2;
            return truncated(quot);
            break;
    }
}

let arg1 = parseInt(prompt("Введите любое число:"));
let arg2 = parseInt(prompt("Введите любое число:"));
let operation = prompt("Какую математическую операцию вы хотите выполнить:\nsum - сложение\nminus - вычитание\nmult - умножение\nquot - деление");

let math = mathOperation(arg1, arg2, operation);

if (typeof math === "number") {
    alert(`Результат операции равен: ${math}`);
} else {
    alert("Вы ввели не верное значение!");
}