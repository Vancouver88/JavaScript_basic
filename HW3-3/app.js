"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


//При помощи цикла for
for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].price * 0.85;
}

//При помощи метода forEach
products.forEach(function (sales) {
    sales.price = sales.price * 0.85;
});