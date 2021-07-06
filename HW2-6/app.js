"use strict";
/**
 *Функция возвращает название "рубль" в правильном падеже, в зависимости от вводимой суммы
 *
 * @param {string} deposite сумма депозита
 * @return {string} слово "рубль" в правильном падеже
 */
function getRubl(deposite) {
    let lastNumber = (deposit[deposit.length - 1]);
    let beforeLastNumber = (deposit[deposit.length - 2]);
    if (beforeLastNumber == 1) {
        return "рублей";
    } else {
        switch (lastNumber) {
            case "0":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return "рублей"
            case "1":
                return "рубль"
            case "2":
            case "3":
            case "4":
                return "рубля"
        }
    }
}

let deposit = prompt("Введите сумму, которую Вы хотите положить на счет в банке:");
alert(`Ваша сумма в ${deposit} ${getRubl(deposit)} успешно зачислена!`);