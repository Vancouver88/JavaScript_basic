"use strict";

let deposit = prompt("Введите сумму, которую Вы хотите положить на счет в банке:");
let lastNumber = (deposit[deposit.length - 1]);

switch (lastNumber) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        alert(`Ваша сумма в ${deposit} рублей успешно зачислена!`);
        break;
    case "1":
        alert(`Ваша сумма в ${deposit} рубль успешно зачислена!`);
        break;
    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма в ${deposit} рубля успешно зачислена!`);
        break;
}
