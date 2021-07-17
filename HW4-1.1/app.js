'use strict';

//ES5
function Eat(name, price) {
    this.name = name;
    this.price = price;
}

Eat.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};

let Product1 = new Eat('Мясо', 300);
Product1.make25PercentDiscount();
console.log(Product1.price);

//ES6
class Material {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

let Product2 = new Material('Стекло', 1100);
Product2.make25PercentDiscount();
console.log(Product2.price);