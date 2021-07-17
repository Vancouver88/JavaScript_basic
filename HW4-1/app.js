'use strict';


//Первый способ
class NumberToObject {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

/**
 * Функция возвращает последнюю цифру введенногго числа
 */
function getUnits(number) {
    return number % 10;
}

/**
 * Функция при true возвращает вторую цифру введенного числа, иначе возвращает 0
 */
function getTens(number) {
    if (number.toString().length > 1) {
        let tensValue = String(number % 100);
        return Number(tensValue[0]);
    } else {
        return 0;
    }
}

/**
 * Фунуция при true возвращает третью цифру введенного числа, иначе возвращает 0
 */
function getHundreds(number) {
    if (number.toString().length > 2) {
        let HundredsValue = String(number % 1000);
        return Number(HundredsValue[0]);
    } else {
        return 0;
    }
}

let number = +prompt('Введите любое целое число от 0 до 999:');
if (number >= 0 && number < 999 && Number.isInteger(number)) {
    let NumberAsObject = new NumberToObject(getUnits(number), getTens(number), getHundreds(number));
    console.log(NumberAsObject);
} else {
    console.log('Вы ввели неправильное число!');
}

//Второй способ (подсмотрен в интернете)
/**
 * Функция превращает введенное число в объект
 */
function getNumberAsObject(number) {
    if (number >= 0 && number < 999 && Number.isInteger(number)) {
        return {
            units: number % 10,
            tens: Math.floor(number / 10 % 10),
            hundreds: Math.floor(number / 100 % 10),
        }
    } else {
        console.log('Вы ввели неправильное число!');
        return {};
    }
}

console.log(getNumberAsObject(number));