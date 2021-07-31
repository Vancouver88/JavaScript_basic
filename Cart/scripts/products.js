'use strict';

/**
 *Конструктор продуктов
 */
class Product {
    /**
     * @param {number} id - ID товара
     * @param {string} name - наименование товара
     * @param {number} price - цена товара
     */
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Массив из продуктов, которые порождаются конструктором Product
const products = [
    new Product(
        0,
        `ellery x m'o capsule1`,
        52.00,
    ),

    new Product(
        1,
        `ellery x m'o capsule2`,
        52.00,
    ),

    new Product(
        2,
        `ellery x m'o capsule3`,
        52.00,
    ),

    new Product(
        3,
        `ellery x m'o capsule4`,
        52.00,
    ),

    new Product(
        4,
        `ellery x m'o capsule5`,
        52.00,
    ),

    new Product(
        5,
        `ellery x m'o capsule6`,
        52.00,
    ),

    new Product(
        6,
        `ellery x m'o capsule7`,
        52.00,
    ),

    new Product(
        7,
        `ellery x m'o capsule8`,
        52.00,
    ),

    new Product(
        8,
        `ellery x m'o capsule9`,
        52.00,
    ),
]